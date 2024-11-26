import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../future-modul/shared.module';
import { ProjectComponent } from './project/project/project.component';
import { ScrollService } from './../../shared/services/scroll/scroll.service';
import { ScrollToFragmentRightComponent } from './../../future-modul/components/scroll-to-fragment-right/scroll-to-fragment-right.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectComponent,
    CommonModule,
    TranslateModule,
    SharedModule,
    RouterModule,
    ScrollToFragmentRightComponent,
  ],
  templateUrl: './portfolio.component.html',

  styleUrls: [
    './portfolio.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class PortfolioComponent {
  isHighlighted: boolean = false;
  private scrollService = inject(ScrollService);

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
