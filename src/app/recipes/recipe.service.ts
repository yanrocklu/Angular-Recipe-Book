import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  //use this recipeChanged because the recipe array changed
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fei Chang',
      'This is Fei Chang',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg',
      [new Ingredient('Fei Chang', 2),
        new Ingredient('Green Onion', 2)
      ]),
    new Recipe(
      'Chili Soup',
      'This is Chili',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg',
      [new Ingredient('Red Bean', 200),
        new Ingredient('Meat', 1)
      ]),
    new Recipe(
      'Apple Pie',
      'This is Apple Pie',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg',
      [new Ingredient('Apple', 2),
        new Ingredient('Flour', 2)
      ]),
    new Recipe(
      'Steak',
      'This is tasty steak',
      'https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_960_720.jpg',
      [new Ingredient('New York strip steak', 1),
        new Ingredient('Black Pepper', 1),
        new Ingredient('Thyme Sprigs', 2),
        new Ingredient('Butter', 2)
      ]),
    new Recipe(
      'Pasta',
      'This is a big burger',
      'https://cdn.pixabay.com/photo/2017/12/29/12/56/burger-3047550_960_720.jpg',
      [new Ingredient('Egg', 1),
        new Ingredient('Ground Beef', 1),
        new Ingredient('Onion', 1),
        new Ingredient('tomato', 1),
        new Ingredient('Lettuce', 1)
      ])


  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    // return a new array, a copy of the the recipes array, so that we can not access the array from outside
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
