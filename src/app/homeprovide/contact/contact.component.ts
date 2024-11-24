import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../future-modul/shared.module';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    TranslateModule,
    FormsModule,
    SharedModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    './../../shared/styles/highlighting.scss',
  ],
})
export class ContactComponent {
  isHighlighted: boolean = false;
  isChecked = false;
  isFocusedName = false;
  isFocusedEmail = false;
  isFocusedMessage = false;
  http = inject(HttpClient);
  mailTest = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  // contactData = {
  //   name: 'Oroku Saki',
  //   email: 'mySuperDupaFoundation@Shredder.de',
  //   message: 'Some text; Any lorem ipsum.',
  // };

  post = {
    endPoint: 'https://portfolio.dev2k.org/contact/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log('Form submitted:', ngForm.valid);

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            // ein fenster mit einer message einblenden lassen?
            this.showMessage('Your message was sent successfully!');
          },
          error: (error) => {
            console.error(error);
            this.showMessage('An error occurred. Please try again.');
          },
          complete: () => console.info('send post complete'),
          // oder hier ein fenster mit einer message einblenden lassen?
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  showMessage(message: string) {
    alert(message);
  }

  onFocus(field: string, isFocused: boolean) {
    if (field === 'name') {
      this.isFocusedName = isFocused;
    } else if (field === 'email') {
      this.isFocusedEmail = isFocused;
    } else if (field === 'message') {
      this.isFocusedMessage = isFocused;
    }
  }
}
