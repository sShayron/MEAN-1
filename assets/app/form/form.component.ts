import { Component } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.css']
})
export class FormComponent {
    showInfos: boolean = true;
    name: string;
    email: string
    username: string;
    password: string;
    confirmPassword: string;
}