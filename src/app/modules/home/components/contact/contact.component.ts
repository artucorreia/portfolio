import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../../services/contact/contact.service';
import { Mail } from '../../../../model/mail';
import { ConfirmationMailComponent } from '../confirmation-mail/confirmation-mail.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfirmationMailComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})

export class ContactComponent {

  public contactForm: FormGroup<{
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    message: FormControl<string | null>;
  }>;

  public displayConfirmationMail: boolean = false;
  public sendingMail: boolean = false;

  constructor (
    private service: ContactService,
    private _fb: FormBuilder
  ) {
    this.contactForm = this._fb.group({
      name:    ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email:   ['', [Validators.required, Validators.email, Validators.minLength(15), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(750)]]
    });
  }

  private mailFactory(): Mail {
    const {name, email, message} = this.contactForm.controls;

    if(!name.value || !email.value || !message.value) throw new Error("Resources must be valid");

    return {
      senderName: name.value,
      senderMail: email.value,
      message: message.value
    }
  }

  public submitForm(): void {
    this.changeSendingMail();

    let mail: Mail = this.mailFactory();

    this.service.sendMail(mail).pipe(
      finalize(() => {
        this.changeSendingMail();
        this.contactForm.enable();
      })
    ).subscribe({
      next: () => {
        this.changeDisplayConfirmationMail();
        setTimeout(() => {this.changeDisplayConfirmationMail()}, 4000);
      },
      error: error => console.error("Attempt to send an email failed " + error)
    });

    this.resetForms();
    this.contactForm.disable();
  }

  private resetForms(): void {
    return this.contactForm.reset();
  }

  private changeDisplayConfirmationMail(): void {
    this.displayConfirmationMail = !this.displayConfirmationMail;
  }

  private changeSendingMail(): void {
    this.sendingMail = !this.sendingMail;
  }
}
