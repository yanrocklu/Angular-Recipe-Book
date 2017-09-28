// if crested a feature module, also need to move all the routers related to this feature module

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RecipesComponent} from "../recipes/recipes.component";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";
import {AuthGuard} from "../auth/auth-guard.service";

const recipeRouters: Routes = [
  {
    path: '', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  // only call forRoot in your root module, anywhere else use forChild

  // moved the AuthGuard service from AppModule to this recipe module because it only used here

  imports:[RouterModule.forChild(recipeRouters)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class RecipesRoutingModule {
}