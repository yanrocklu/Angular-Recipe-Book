import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "../shopping-list/shopping-list-edit/shopping-list-edit.component";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {SignupComponent} from "../auth/signup/signup.component";
import {SigninComponent} from "../auth/signin/signin.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
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
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
