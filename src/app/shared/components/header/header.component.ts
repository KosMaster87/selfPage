import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from './../../services/scroll/scroll.service';
import { HamburgerMenuBtnComponent } from './../../../future-modul/components/hamburger-menu-btn/hamburger-menu-btn.component';
import { SharedModule } from './../../../future-modul/shared.module';

@Component({
  selector: 'app-header',
  imports: [
    // TranslateModule,
    RouterLink,
    HamburgerMenuBtnComponent,
    SharedModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './../../../shared/styles/iconHover-lang.scss',
  ],
})
export class HeaderComponent {
  @Output() languageChanged = new EventEmitter<string>();

  currentLanguage: string = 'de';
  private scrollService = inject(ScrollService);

  translateText(lang: string) {
    this.languageChanged.emit(lang);
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
