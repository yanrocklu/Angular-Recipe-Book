// Here the "import" is used by typescript, not by Angular
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";

import {AppRoutingModule} from "./app-routing/app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({

  // declarations declares components, directives, pipes
  declarations: [
    AppComponent
  ],
  // imports defines which other modules does this module use
  // here the "imports" is different from the "import" at the top. Here the "imports" can be recognized bt Angular

  imports: [
    // this browser module contains all the features in CommonModule and additional features only used when app starts
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],

  // bootstrap defines what's the root component
  bootstrap: [AppComponent]
})
export class AppModule {
}
