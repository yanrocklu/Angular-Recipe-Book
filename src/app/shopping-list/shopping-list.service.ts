import {Subject} from "rxjs/Subject";
import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  //inform the component that new data is available
  ingredientsChanged = new Subject<Ingredient[]>();

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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    //this way will be a lot unnecessary event emission
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    // ... is spread operator, will split array to single ingredients
    // Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
