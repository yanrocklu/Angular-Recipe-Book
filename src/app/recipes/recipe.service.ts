import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Fei Chang',
      'This is Fei Chang',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg',
      [new Ingredient('Fei Chang', 2),
        new Ingredient('Green Onion', 2),
      ]),
    new Recipe(
      1,
      'Chili Soup',
      'This is Chili',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg',
      [new Ingredient('Red Bean', 200),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    // return a new array, a copy of the the recipes array, so that we can not access the array from outside
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    // const recipe = this.recipes.find(
    //   (r) => {
    //     return r.id === id;
    //   }
    // );
    // return recipe;

    return this.recipes.slice()[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

}
