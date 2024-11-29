import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  imports: [],
  templateUrl: './menu-button.component.html',
  styleUrls: [
    './menu-button.component.scss', // Basic style and responsive.
    './../../../../shared/styles/menuBtn.scss', // Change color and else.
  ],
})
export class MenuButtonComponent {
  @Input() btnName!: string;
}
