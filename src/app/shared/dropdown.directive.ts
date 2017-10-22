import {Directive, HostBinding, OnInit, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
  @HostBinding('class.open') dropdownOpen: boolean;

  ngOnInit() {
    this.dropdownOpen = false;
  }

  // toggleOpen is just a name, descriptive
  @HostListener('click') toggleOpen() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}