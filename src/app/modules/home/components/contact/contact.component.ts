import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationMailComponent } from '../confirmation-mail/confirmation-mail.component';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../../../environments/environment';

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

  constructor (private _fb: FormBuilder) {
    this.contactForm = this._fb.group({
      name:    ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email:   ['', [Validators.required, Validators.email, Validators.minLength(15), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(750)]]
    });
  }

  ngOnInit(): void {
    fetch(environment.serviceId)
    fetch(environment.templateId)
    fetch(environment.publicKey)
  }

  private validateControls(): void {
    const {name, email, message} = this.contactForm.controls;

    if(!name.value || !email.value || !message.value) throw new Error("Resources must be valid");
  }

  public submitForm(event: Event): void {
    this.changeSendingMail();
    this.validateControls();

    emailjs.sendForm(
      environment.serviceId,
      environment.templateId,
      event.target as HTMLFormElement,{
        publicKey: environment.publicKey
    }).then(
      () => {
        this.changeDisplayConfirmationMail();
        setTimeout(() => {this.changeDisplayConfirmationMail()}, 4000);
      },
      (error) => {
        console.log("Attempt to send an email failed...", (error as EmailJSResponseStatus).text);
      },
    ).finally(
      () => {
        this.changeSendingMail();
        this.contactForm.enable();
      }
    );

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
