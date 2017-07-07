import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //@Input decorator binds a property within one component (child component) to receive a value from another component (parent component). This is one way communication from parent to child.
  @Input() recipe: Recipe;

  @Output() recipeDetailSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  OnSelectRecipeDetail(){
    this.recipeDetailSelected.emit();
  }

}
