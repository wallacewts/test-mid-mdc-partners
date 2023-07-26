import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { IContactData } from './interfaces/contact-data.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  closeData = true;
  data?: IContactData;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(
        {
          value: null,
          disabled: false,
        },
        [Validators.required, Validators.minLength(2)]
      ),
      email: new FormControl(
        {
          value: null,
          disabled: false,
        },
        [Validators.required, Validators.email]
      ),
      subject: new FormControl(
        {
          value: null,
          disabled: false,
        },
        [Validators.required, Validators.minLength(5)]
      ),
      message: new FormControl(
        {
          value: null,
          disabled: false,
        },
        [Validators.required, Validators.minLength(5)]
      ),
    });
  }

  getControl(name: string): AbstractControl {
    return this.form.get(name) as AbstractControl;
  }

  submit() {
    if (!this.form.invalid) {
      this.data = this.form.value;
      this.closeData = false;
    }
  }
}
