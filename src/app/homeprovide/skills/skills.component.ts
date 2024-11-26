import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../future-modul/shared.module';
import { ScrollService } from './../../shared/services/scroll/scroll.service';
import { ScrollToFragmentLeftComponent } from './../../future-modul/components/scroll-to-fragment-left/scroll-to-fragment-left.component';

@Component({
  selector: 'app-skills',
  imports: [
    TranslateModule,
    SharedModule,
    RouterModule,
    ScrollToFragmentLeftComponent,
  ],
  templateUrl: './skills.component.html',

  styleUrls: [
    './skills.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class SkillsComponent {
  isHighlighted: boolean = false;
  private scrollService = inject(ScrollService);

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
