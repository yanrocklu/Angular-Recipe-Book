import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  // need to use the ShoppingListService app wide, so cannot put it here, has to be in appmodule
  // providers:[
  //   AuthService,
  //   AuthGuard
  // ]
})
export class AuthModule {}