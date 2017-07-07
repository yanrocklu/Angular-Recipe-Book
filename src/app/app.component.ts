import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'RecipeIsClicked';

  onNavigate(featureNavigated: string) {
    this.loadedFeature = featureNavigated;
  }

}
