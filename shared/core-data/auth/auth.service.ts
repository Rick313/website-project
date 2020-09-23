import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from "firebase";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
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
      switchMap((data) => {
        if (data) {
          return this.firestore
            .collection("user")
            .doc<User>(data.uid)
            .valueChanges()
            .pipe(map((user) => (user.delete_at ? null : user)));
        }
        return of(null);
      })
    );
  }

  register(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => this._record(user))
      .catch((err) => console.error(err));
  }

  login(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.auth$.toPromise());
  }

  logout() {
    return this.auth.signOut();
  }

  private _record(user: firebase.User) {
    return this.firestore
      .collection<User>("user")
      .valueChanges()
      .pipe(
        switchMap((users) => {
          const data: User = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            created_at: new Date(),
            updated_ad: new Date(),
            delete_at: null,
            roles: {},
          };
          if (users.length === 0) {
            data.roles = { owner: true };
          } else {
            data.roles = { subscriber: true };
          }
          return this.firestore.collection("user").doc(user.uid).set(data);
        })
      )
      .toPromise();
  }
}
