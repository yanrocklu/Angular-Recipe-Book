import {EventEmitter} from "@angular/core";
import {Recipe} from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('1st Test Recipe', 'This is 1st sample recipe', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg'),
    new Recipe('2nd Test Recipe', 'This is 2nd sample recipe', 'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg')
  ];

  constructor() {
  }

  getRecipes() {
    // return a new array, a copy of the the recipes array, so that we can not access the array from outside
    return this.recipes.slice();
  }

}
