import {NgModule} from "@angular/core";

import {HeaderComponent} from "./Header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {RecipeService} from "../recipes/recipe.service";
import {DataStorageService} from "../shared/data-storage.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {AuthService} from "../auth/auth.service";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    // export this HeaderComponent because it's used in app.component.html
    HeaderComponent
    // don't need to export HomeComponent because don't need to export declaration for routing
  ],

  // providers defines services used in this app,
  providers: [RecipeService,
    DataStorageService,
    ShoppingListService,
    AuthService
  ]
})
export class CoreModule {}