import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
  // need to use the ShoppingListService app wide, so cannot put it here, has to be in appmodule
  // providers:[
  //   AuthService,
  //   AuthGuard
  // ]
})
export class AuthModule {}