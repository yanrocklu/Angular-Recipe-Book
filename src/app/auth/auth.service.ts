// use firebase SDK for authentication
import * as firebase from "firebase";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          // inject the router component and when signin the user, route to the root page
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  logOut() {
    this.router.navigate(['/signin']);
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    // it's an asynchronous action
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      )
    return this.token;
    ;
  }

  isAuthenticated() {
    // if (this.token === undefined) {
    //   if (!firebase.auth().currentUser) {
    //     let hasLocalStorageUser = false;
    //     for (let key in localStorage) {
    //       if (key.startsWith("firebase:authUser:")) {
    //         hasLocalStorageUser = true;
    //         let localStorageObject = JSON.parse(localStorage[key]);
    //         let token = localStorageObject.stsTokenManager.accessToken;
    //         // console.log(token);
    //         this.token = token;
    //       }
    //     }
    //     if (!hasLocalStorageUser) {
    //       console.log('Attempting to access a secure route. Please authenticate first.');
    //       // replace({
    //       // pathname: '/login',
    //       // state: { nextPathname: nextState.location.pathname }
    //       // });
    //     }
    //   }
    // }
    return this.token != null;
  }
}