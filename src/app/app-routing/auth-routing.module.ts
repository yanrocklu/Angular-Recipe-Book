import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SigninComponent} from "../auth/signin/signin.component";
import {SignupComponent} from "../auth/signup/signup.component";

const authRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
]

@NgModule({
  imports:[
    // only call forRoot in your root module, anywhere else use forChild
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}