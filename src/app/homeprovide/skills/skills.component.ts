import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../future-modul/shared.module';
import { RouterModule } from '@angular/router';

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
}
