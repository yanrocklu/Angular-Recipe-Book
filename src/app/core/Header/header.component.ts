import {Component} from "@angular/core";
import {Response} from "@angular/http";

import {AuthService} from "../../auth/auth.service";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout(){
    this.authService.logOut();
  }

  // create a function to use authService, it cannot used in html file, the AoT compilation would error out
  // error msg is: "Property 'authService' is private and only accessible within class 'HeaderComponent' "
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

}
