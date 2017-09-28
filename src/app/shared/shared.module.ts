import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DropdownDirective} from "./dropdown.directive";

@NgModule({
  // directives, components, pipes, can only be declared once.
  // Since this DropdownDirective is used in two component, here put it in a shared module, just declare once
  declarations: [
    DropdownDirective
  ],
  // and export as a module, then can be used in multiple components
  exports:[
    CommonModule,
    DropdownDirective
  ]

  // Don't provide Services in Shared Modules! Especially not, if you plan to use then in Lazy Loaded Modules!
})
export class SharedModule {}