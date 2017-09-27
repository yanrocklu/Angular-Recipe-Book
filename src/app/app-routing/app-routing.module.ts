import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ShoppingListComponent} from "../shopping-list/shopping-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent}
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
