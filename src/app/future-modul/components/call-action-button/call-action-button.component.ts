import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-call-action-button',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  // templateUrl: './call-action-button.component.html',
  template: `
    <div class="btnFlexBox">
      <a
        [routerLink]="routerLink"
        [fragment]="fragment"
        class="buttonLink"
        tabindex="-1"
      >
        <button
          class="btnSelf fontOverpass disableTextSelection"
          [attr.type]="buttonType"
          [ngClass]="buttonClass"
          [disabled]="disabled"
        >
          {{ buttonTextRowOne | translate }} <br />
          {{ buttonTextRowTWO | translate }}
        </button>
      </a>
    </div>
  `,
  styleUrls: [
    './call-action-button.component.scss', // Basic style and responsive.
    './../../../shared/styles/buttons.scss', // Change color and else.
  ],
})
export class CallActionButtonComponent {
  /**
   * buttenClass means to be import the current  [ngClass] sounds:  buttonClass.
   */
  @Input() buttonClass: string = '';
  @Input() buttonTextRowOne: string = '';
  @Input() buttonTextRowTWO: string = '';
  @Input() link: string = '';
  @Input() buttonType: string = 'button';
  @Input() disabled: boolean = false;
  @Input() routerLink: string | any[] = ''; // Unterstützt auch Arrays wie `['/path', 'to']`
  @Input() fragment: string = '';

  onClick() {
    const element = document.querySelector(this.link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ! Oder mit HostBinding; wo die Logick in der Call-Akction-Btn Component drinne ist das entscheidet/ steht in welchen Componenten dieser Butten benutzt wird.
// import { Component, Input, HostBinding } from '@angular/core';

// @Component({
//   selector: 'app-call-action-button',
//   standalone: true,
//   templateUrl: './call-action-button.component.html',
//   styleUrls: [
//     './call-action-button.component.scss',
//     './../../../shared/styles/buttons.scss',
//   ],
// })
// export class CallActionButtonComponent {
//   @Input() type: 'contact' | 'landing' = 'contact';

//   @HostBinding('class.contactButton') get isContact() {
//     return this.type === 'contact';
//   }

//   @HostBinding('class.landingButton') get isLanding() {
//     return this.type === 'landing';
//   }
// }
