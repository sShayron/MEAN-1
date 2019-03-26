import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'singup',
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
    signUpForm: FormGroup;

    onSubmit() {
        console.log(this.signUpForm);
    }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            nome: new FormControl(null, Validators.required),
            sobrenome: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+')
            ]),
            senha: new FormControl(null, Validators.required);
        })
    }
}