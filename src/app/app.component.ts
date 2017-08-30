import {Component, OnInit} from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // what is this for?
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAHPQ0KaOJITbKEcTWqQWeM0KF3gYRRJ7o",
      authDomain: "ng-recipe-book-37893.firebaseapp.com",
    })
  }

  // what is this for?
  onNavgate(feature: string) {
    this.loadedFeature = feature;
  }
}
