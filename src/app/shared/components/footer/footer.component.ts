import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedModule } from './../../../future-modul/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SharedModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './../../../shared/styles/iconHover-social.scss',
  ],
})
export class FooterComponent {
  private router: Router = inject(Router);

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
