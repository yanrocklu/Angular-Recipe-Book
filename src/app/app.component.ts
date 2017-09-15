import {Component, OnInit} from "@angular/core";
import * as firebase from 'firebase';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService){}

  // what is this for?
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAHPQ0KaOJITbKEcTWqQWeM0KF3gYRRJ7o",
      authDomain: "ng-recipe-book-37893.firebaseapp.com",
    })

    // if you hit refresh or enter a new URL, you basically reload the app. Hence your state ("you are logged in") is lost. You would need to add a method (probably to ngOnInit of your AppComponent) to check if a token is present in localStorage to instantly sign the user in once the app loads.
    // firebase.auth().onAuthStateChanged(
    //   user => {
    //   this.authService.setUser(user);
    // });
    // console.log(firebase.auth().currentUser);
  }

  // what is this for?
  onNavgate(feature: string) {
    this.loadedFeature = feature;
  }


}
