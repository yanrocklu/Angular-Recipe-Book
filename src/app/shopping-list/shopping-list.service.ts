import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {RecipeService} from "../recipes/recipe.service";


export class ShoppingListService {
  //inform the component that new data is available
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  getIngredients() {
    // return a new array, a copy of the the ingredients array, so that we can not access the array from outside
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    //this way will be a lot unnecessary event emission
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    // ... is spread operator, will split array to single ingredients
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
