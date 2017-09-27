// Here the "import" is used by typescript, not by Angular
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";

import {HeaderComponent} from "./Header/header.component";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {RecipeResolverService} from "./recipes/recipe-resolver.service";
import {RecipeService} from "./recipes/recipe.service";
import {DataStorageService} from "./shared/data-storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {RecipesModule} from "./recipes/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@NgModule({

  // declarations declares components, directives, pipes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // imports defines which other modules does this module use
  // here the "imports" is different from the "import" at the top. Here the "imports" can be recognized bt Angular
  imports: [
    // this browser module contains all the features in CommonModule and additional features only used when app starts
    BrowserModule,
    // FormsModule,   // todo: we don't use this FormsModule anywhere else in the app?
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],

  // providers defines services used in this app,
  providers: [RecipeResolverService,
              RecipeService,
              DataStorageService,
              ShoppingListService,
              AuthService,
              AuthGuard
  ],
  // bootstrap defines what's the root component
  bootstrap: [AppComponent]
})
export class AppModule {
}
