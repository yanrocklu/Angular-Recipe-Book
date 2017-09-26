import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ShoppingListEditComponent} from "./shopping-list-edit/shopping-list-edit.component";
import {ShoppingListComponent} from "./shopping-list.component";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
  // need to use the ShoppingListService app wide, so cannot put it here, has to be in appmodule
  // providers: [
  //   ShoppingListService
  // ]
})
export class ShoppingListModule {}