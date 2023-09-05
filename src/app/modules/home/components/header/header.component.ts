import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor() { }

  displayMenu(): boolean { 
    if (this.menuOpen) {
      return this.menuOpen = false;
    } else {
      return this.menuOpen = true;
    }
  }
}
