import { bindable } from 'aurelia-framework';
import { NavModel } from 'aurelia-router';

export class NavBar {
  @bindable() navigation: NavModel[] = [];
  mobileMenuOpen = false;

  mobileMenuClicked() {    
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
