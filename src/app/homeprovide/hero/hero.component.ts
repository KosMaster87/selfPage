import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { SharedModule } from '../../future-modul/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll/scroll.service'; // Importiere den ScrollService

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, CommonModule, SharedModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', './../../shared/styles/arrowDown.scss'],
})
export class HeroComponent {
  private scrollService = inject(ScrollService)

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
