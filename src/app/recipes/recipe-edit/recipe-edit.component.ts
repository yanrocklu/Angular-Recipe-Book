import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {FormGroup, FormControl, FormArray} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          // use + to convert string to number
          this.id = +params['id'];
          this.editMode = params["id"] != null;
          //  call initForm whenever the route params change, because that indcates we reload the page.
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initForm() {
    // todo: why here use let? what if just name = ''?
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            //  because have two controls to control the single ingredient, instead of pushing ingredient to the array, using FormGroup to control the two controls, name and amount
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          )
        }

      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

}
