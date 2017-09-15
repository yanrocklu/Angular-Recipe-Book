import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";
import {tokenize} from "@angular/compiler/src/ml_parser/lexer";

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  // this method only gives us back an observable, so should return the observable
  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-37893.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.getToken();

    //map here is to transform response data the prevent error, eg the recipe doesn't have ingredient property. So the map here is to check ingredients, if not, add empty array as ingredient property
    this.http.get('https://ng-recipe-book-37893.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);

        }
      );
  }

}