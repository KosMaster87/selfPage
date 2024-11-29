import { Component } from '@angular/core';
import { NoScrollDirective } from './../../directives/no-Scroll/no-scroll.directive';
import { MenuButtonComponent } from './../menu-button/menu-button/menu-button.component';

@Component({
  selector: 'app-hamburger-menu-btn',
  imports: [NoScrollDirective, MenuButtonComponent],
  templateUrl: './hamburger-menu-btn.component.html',
  styleUrl: './hamburger-menu-btn.component.scss',
})
export class HamburgerMenuBtnComponent {
  arrBtn: any = [
    {
      btnName: 'About me',
    },
    {
      btnName: 'My skills',
    },
    {
      btnName: 'Portfolio',
    },
    {
      btnName: 'Contact',
    },
  ];
}
