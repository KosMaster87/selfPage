import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../future-modul/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from './../../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, CommonModule, SharedModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', './../../shared/styles/arrowDown.scss'],
})
export class HeroComponent {
  private scrollService = inject(ScrollService);

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
