import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, QueryFn } from "@angular/fire/firestore";
import { User } from "./user.model";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(
    private readonly firestore: AngularFirestore,
    private readonly auth: AngularFireAuth
  ) {}

  findAll(where?: QueryFn) {
    if (where) {
      const result = this.firestore.collection<User>("user", where);
      return result.valueChanges();
    }
    return this.firestore.collection<User>("user").valueChanges();
  }
  findOne(id: string) {
    return this.firestore.collection("user").doc(id).valueChanges();
  }

  update(id: string, update: Partial<User>) {
    return this.firestore.collection("user").doc(id).update(update);
  }
}
