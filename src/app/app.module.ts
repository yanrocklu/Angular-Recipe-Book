import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./Header/header.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {RecipeResolverService} from "./recipes/recipe-resolver.service";
import {RecipeService} from "./recipes/recipe.service";
import {DataStorageService} from "./shared/data-storage.service";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";

@NgModule({

  // declarations declares components, directives, pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    SigninComponent,
    SignupComponent
  ],
  // imports defines which other modules does this module use
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],

  // providers defines services used in this app,
  providers: [ShoppingListService,
              RecipeResolverService,
              RecipeService,
              DataStorageService,
              AuthService,
              AuthGuard],
  // bootstrap defines what's the root component
  bootstrap: [AppComponent]
})
export class AppModule {
}
