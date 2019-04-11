import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'singup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
  estados: any;
  signUpForm: FormGroup;
  hasErrors = false;

  constructor(private authService: AuthService, private http: HttpClient) {}

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
  get estado() {
    return this.signUpForm.get('estado');
  }

  markAsTouched() {
    this.name.markAsTouched();
    this.password.markAsTouched();
    this.email.markAsTouched();
    this.genre.markAsTouched();
    this.estado.markAsTouched();
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.register({
        name: this.signUpForm.value.name,
        lastName: this.signUpForm.value.lastName,
        password: this.signUpForm.value.password,
        email: this.signUpForm.value.email,
        genre: this.signUpForm.value.genre,
        estado: this.signUpForm.value.estado
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
      genre: new FormControl(null, Validators.required),
      estado: new FormControl(null, Validators.required)
    });

    this.http.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
    ).subscribe(res => this.estados = res);
  }
}
