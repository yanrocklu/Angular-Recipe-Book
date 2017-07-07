import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('1st Test Recipe', 'This is 1st sample recipe', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg'),
    new Recipe('2nd Test Recipe', 'This is 2nd sample recipe', 'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeDetailSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }


}
