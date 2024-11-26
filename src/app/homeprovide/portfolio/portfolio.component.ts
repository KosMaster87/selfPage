import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../future-modul/shared.module';
import { ProjectComponent } from './project/project/project.component';
import { ScrollService } from './../../shared/services/scroll/scroll.service';
import { ScrollToFragmentOptionalComponent } from './../../future-modul/components/scroll-to-fragment-optional/scroll-to-fragment-optional.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectComponent,
    CommonModule,
    TranslateModule,
    SharedModule,
    RouterModule,
    ScrollToFragmentOptionalComponent,
  ],
  templateUrl: './portfolio.component.html',

  styleUrls: [
    './portfolio.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class PortfolioComponent {
  rotatingArrowIsLeft = false;
  isHighlighted: boolean = false;
  private scrollService = inject(ScrollService);

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
