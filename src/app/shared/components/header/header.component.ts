import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from './../../services/scroll/scroll.service';
import { HamburgerMenuBtnComponent } from './../../../future-modul/components/hamburger-menu-btn/hamburger-menu-btn.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HamburgerMenuBtnComponent],
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './../../../shared/styles/iconHover-lang.scss',
  ],
})
export class HeaderComponent {
  @Output() languageChanged = new EventEmitter<string>();
  currentLanguage: string = 'de';

  translateText(lang: string) {
    this.languageChanged.emit(lang);
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  private scrollService = inject(ScrollService);

  navigateToHomeAndScroll(fragment: string): void {
    this.scrollService.scrollToFragment(fragment, '/home');
  }
  // scrollToFragment(fragment: string): void {
  //   this.scrollService.scrollToFragment(fragment);
  // }
}
