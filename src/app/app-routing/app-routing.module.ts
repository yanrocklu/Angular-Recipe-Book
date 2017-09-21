import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {SignupComponent} from "../auth/signup/signup.component";
import {SigninComponent} from "../auth/signin/signin.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'shopping-list',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component: ShoppingListComponent
    // children: [
    // { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    // {path: 'edit', component: ShoppingListEditComponent}
    // ]
  },
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
  // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [
    // only call forRoot in your root module, anywhere else use forChild
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
