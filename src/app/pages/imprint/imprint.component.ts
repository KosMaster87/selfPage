import { Component } from '@angular/core';
import { SharedModule } from '../../future-modul/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  imports: [SharedModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrls: [
    './imprint.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class ImprintComponent {
  isHighlighted: boolean = false;
}
