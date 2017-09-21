// if crested a feature module, also need to move all the routers related to this feature module

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {AuthGuard} from "../auth/auth-guard.service";

const recipeRouters: Routes = [
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
]

@NgModule({
  imports:[
    // only call forRoot in your root module, anywhere else use forChild
    RouterModule.forChild(recipeRouters)
  ],
  exports: [RouterModule]
})

export class RecipesRoutingModule {
}