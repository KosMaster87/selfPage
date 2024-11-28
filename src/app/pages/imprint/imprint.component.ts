import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../future-modul/shared.module';

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
}
