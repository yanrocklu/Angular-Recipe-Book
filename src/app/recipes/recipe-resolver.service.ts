import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {RecipeService} from "./recipe.service";
import {Ingredient} from "../shared/ingredient.model";


interface Recipe{
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}

@Injectable()
export class RecipeResolverService implements Resolve<Recipe>{
  constructor(private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipe(+route.params['id']);
  }

}
