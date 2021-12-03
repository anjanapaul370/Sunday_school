import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Router } from "@angular/router";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Subject } from "rxjs";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  constructor(
    private afAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

    registerUser(authData: AuthData) {
      this.afAuth.createUserWithEmailAndPassword(
        authData.email,
        authData.password
        ).then(result => {
          console.log(result);
          this.authSuccessfully();
        })
        .catch(error => {
          console.log(error);
        });
    }

    login(authData: AuthData) {
      this.afAuth.signInWithEmailAndPassword(
        authData.email,
        authData.password
        ).then(result => {
          console.log(result);
          this.authSuccessfully();
        })
        .catch(error => {
          console.log(error);
        });
    }


  logout(){
    this.authChange.next(false);
    this.router.navigate(['/auth']);
    this.isAuthenticated = false;
  }

  isAuth(){
    return this.isAuthenticated;
  }

  private authSuccessfully(){
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/pages']);
  }
}
