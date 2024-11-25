import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../future-modul/shared.module';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, SharedModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class AboutComponent {
  isHighlighted: boolean = false;
  private scrollService = inject(ScrollService)

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
