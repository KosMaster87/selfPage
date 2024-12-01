import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HamburgerMenuService {
  arrBtn: any = [
    { btnName: 'SECTIONS.section-about', sectionId: 'aboutH1' },
    { btnName: 'SECTIONS.section-skills', sectionId: 'skills_Component' },
    { btnName: 'SECTIONS.section-portfolio', sectionId: 'portfolio_Component' },
    { btnName: 'SECTIONS.section-contact', sectionId: 'linearGradient' },
  ];

  getButtons() {
    return this.arrBtn;
  }
}
