import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  public contactForm;

  constructor (private _fb: FormBuilder) {
    this.contactForm = this._fb.group({
      name: [
        '', 
        [
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(100)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(15),
          Validators.maxLength(100)
        ]
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(750)
        ]
      ]
    });
  }

  public submitForm(): void {
    console.log(this.contactForm)
    console.log("name: " + this.contactForm.controls.name.value)
    console.log("email: " + this.contactForm.controls.email.value)
    console.log("message: " + this.contactForm.controls.message.value)
  }
}
