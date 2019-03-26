import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    signInForm: FormGroup;

    onSubmit() {
        console.log(this.signInForm);
    }

    ngOnInit() {
        this.signInForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+')
            ]),
            senha: new FormControl(null, Validators.required)
        })
    }
}