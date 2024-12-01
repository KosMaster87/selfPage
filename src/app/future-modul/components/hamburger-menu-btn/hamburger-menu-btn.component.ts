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
    { btnName: 'About me', sectionId: 'aboutH1' },
    { btnName: 'My skills', sectionId: 'skills_Component' },
    { btnName: 'Portfolio', sectionId: 'portfolio_Component' },
    { btnName: 'Contact', sectionId: 'linearGradient' },
  ];

  onMenuBtnClick(sectionId: string) {
    const menuInput = document.getElementById('menuInput') as HTMLInputElement;

    setTimeout(() => {
      if (menuInput) {
        menuInput.checked = false;
      }

      const body = document.body;
      body.classList.remove('no-scroll');

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  }
}
