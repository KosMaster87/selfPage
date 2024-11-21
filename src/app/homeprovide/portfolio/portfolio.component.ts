import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../future-modul/shared.module';
import { ProjectComponent } from './project/project/project.component';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectComponent, CommonModule, TranslateModule, SharedModule],
  templateUrl: './portfolio.component.html',

  styleUrls: [
    './portfolio.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class PortfolioComponent {
  isHighlighted: boolean = false;
}
