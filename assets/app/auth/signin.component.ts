import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  providers: [AuthService],
  styles: [
    `
      .server-error {
        color: red;
        margin-bottom: 15px;
      }
    `
  ]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private authService: AuthService) {}

  onSubmit() {
    console.log(this.signInForm);
    if (this.signInForm.valid) {
      this.authService.login({
        email: this.signInForm.value.email,
        password: this.signInForm.value.senha
      });
    }
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+")
      ]),
      senha: new FormControl(null, Validators.required)
    });
  }
}
