import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from "firebase";
import { from, Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { User } from "../user";

const { GoogleAuthProvider } = auth;

@Injectable({ providedIn: "root" })
export class AuthService {
  auth$: Observable<User>;
  constructor(
    private readonly firestore: AngularFirestore,
    private readonly auth: AngularFireAuth
  ) {
    this.auth$ = this.auth.authState.pipe(
      switchMap((data) => (data ? this._get(data.uid) : of(null)))
    );
  }

  register(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => this._record(user));
  }

  login(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap((credential) => this.auth$),
      catchError((err) => of(err))
    );
  }

  logout() {
    return this.auth.signOut();
  }

  private _record(user: firebase.User) {
    const data: User = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      created_at: new Date(),
      updated_ad: new Date(),
      delete_at: null,
      roles: {
        subscriber: true,
      },
    };
    this.firestore.collection("user").doc(user.uid).set(data, { merge: true });
  }
  private _get(uid: string) {
    return this.firestore
      .collection("user")
      .doc<User>(uid)
      .valueChanges()
      .pipe(map((user) => (user.delete_at ? null : user)));
  }
}
