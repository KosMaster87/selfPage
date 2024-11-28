import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from './../../services/scroll/scroll.service';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() languageChanged = new EventEmitter<string>();
  private scrollService = inject(ScrollService);

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
  
  translateText(lang: string) {
    this.languageChanged.emit(lang);
  }
}
