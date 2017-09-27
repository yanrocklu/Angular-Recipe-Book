import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

const authRouters: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
]

@NgModule({
  imports:[
    // only call forRoot in your root module, anywhere else use forChild
    RouterModule.forChild(authRouters)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}