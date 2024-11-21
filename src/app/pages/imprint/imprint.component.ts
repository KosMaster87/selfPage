import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../future-modul/shared.module';

@Component({
  selector: 'app-imprint',
  imports: [RouterLink, SharedModule],
  templateUrl: './imprint.component.html',
  styleUrls: [
    './imprint.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class ImprintComponent {
  isHighlighted: boolean = false;
}
