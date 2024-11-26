import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../future-modul/shared.module';
import { ScrollService } from './../../shared/services/scroll/scroll.service';
import { ScrollToFragmentRightComponent } from './../../future-modul/components/scroll-to-fragment-right/scroll-to-fragment-right.component';

@Component({
  selector: 'app-about',
  imports: [
    TranslateModule,
    SharedModule,
    RouterModule,
    ScrollToFragmentRightComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class AboutComponent {
  isHighlighted: boolean = false;
  private scrollService = inject(ScrollService);

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
