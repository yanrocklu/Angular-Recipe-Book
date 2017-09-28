import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormControl, FormArray, Validators} from "@angular/forms";

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
              private recipeService: RecipeService,
              //for routing navigation
              private router: Router) {
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

  onCancel() {
    // by clicking the cancel button, navigate to one up level
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    // this.recipeForm.value = const newRecipe
    // because the object stored in recipeForm.value should have a valid format to fit one of our recipes
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['decscription'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingedients']
    // );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }
    else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    //  cast command, inside the () is FormArray
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/)
        ])
      })
    )
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
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
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9][0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      // just use .required, NOT .required(), don't execute it, just pass a reference to the validator so angular just execute it at the time when it validates it.
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  // create functions to use recipeForm, it cannot used in the html file, would error out
  // error msg is : "Property 'controls' does not exist on type 'AbstractControl'"
  getRecipeForms(){
    return this.recipeForm;
  }

  getReipeFormsIngredientsArray(){
    return (<FormArray>this.recipeForm.get('ingredients'));
  }

}
