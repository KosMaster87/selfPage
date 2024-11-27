import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../future-modul/shared.module';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SharedModule],
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './../../../shared/styles/iconHover-social.scss',
  ],
})
export class FooterComponent {}
