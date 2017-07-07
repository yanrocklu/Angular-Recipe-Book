import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  // @Output decorator binds a property of a component to send data from one component (child component) to calling component (parent component). This is one way communication from child to parent component.
  @Output() featureSelected = new EventEmitter<string>();

  onClickRecipes(){
    this.featureSelected.emit('RecipeIsClicked');
  }

  onClickShoppingList(){
    this.featureSelected.emit('ShoppingListIsClicked');
  }

}
