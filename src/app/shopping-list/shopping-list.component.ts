import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] ;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    //besides getting ingredient at the time we load the app, also subscribe to the ingredients change event, so whenever the ingredients changed,
    this.shoppinglistService.ingredientsChanged
      .subscribe(
        (ingredients:Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }



}
