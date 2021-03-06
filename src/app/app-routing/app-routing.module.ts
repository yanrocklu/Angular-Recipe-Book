import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";

import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {HomeComponent} from "../core/home/home.component";

const appRoutes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  // lazy loading, only loaded when we call this feature
  {path: 'recipes', loadChildren: '../recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}

  // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  // only call forRoot in your root module, anywhere else use forChild
  imports: [
    // preloads all lazy loaded modules, so the lazy loaded modules don't load at the app start, but then load
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
