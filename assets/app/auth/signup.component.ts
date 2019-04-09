import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'singup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hasErrors = false;

  constructor(private authService: AuthService) {}

  get name() {
    return this.signUpForm.get('name');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get genre() {
    return this.signUpForm.get('genre');
  }

  markAsTouched() {
    this.name.markAsTouched();
    this.password.markAsTouched();
    this.email.markAsTouched();
    this.genre.markAsTouched();
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.register({
        name: this.signUpForm.value.name,
        lastName: this.signUpForm.value.lastName,
        password: this.signUpForm.value.password,
        email: this.signUpForm.value.email,
        genre: this.signUpForm.value.genre
      });
      return;
    }
    this.markAsTouched();
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastName: new FormControl(null),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+')
      ]),
      password: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required)
    });
  }
}
