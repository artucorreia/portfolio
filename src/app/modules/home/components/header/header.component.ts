import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
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
