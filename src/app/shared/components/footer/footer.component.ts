import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from './../../../future-modul/shared.module';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SharedModule],
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './../../../shared/styles/iconHover-social.scss',
  ],
})
export class FooterComponent {
  private scrollService = inject(ScrollService);

  navigateToHomeAndScroll(fragment: string): void {
    this.scrollService.scrollToFragment(fragment, '/home');
  }
  // scrollToFragment(fragment: string): void {
  //   this.scrollService.scrollToFragment(fragment);
  // }
}
