import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'selfPage';
  private translateService = inject(TranslateService);

  ngOnInit() {
    this.setDefaultLanguage();
  }

  private setDefaultLanguage() {
    this.translateService.setDefaultLang('de');
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    // console.log("Sprache gewechselt zu:", lang);
  }
}
