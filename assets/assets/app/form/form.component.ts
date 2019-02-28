import { Component } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styles: [`
        label {
            margin: 0 12px;
        }
        .input-group {
            margin: 4px 12px;
        }
        .btn {
            display: block;
            width: 100%;
            margin: 0 12px;
        }
    `]
})
export class FormComponent {

}