import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;
  display: string = 'none';

  constructor() { }

  displayMenu(): void { 
    if (this.menuOpen) {
      this.menuOpen = false;
      this.display = 'none';
    } else {
      this.menuOpen = true;
      this.display = 'block';
    }
  }
}
