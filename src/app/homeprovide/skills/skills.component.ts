import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../future-modul/shared.module';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule, SharedModule, RouterModule],
  templateUrl: './skills.component.html',

  styleUrls: [
    './skills.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class SkillsComponent {
  isHighlighted: boolean = false;
  private scrollService = inject(ScrollService)

  scrollToFragment(fragment: string): void {
    this.scrollService.scrollToFragment(fragment);
  }
}
