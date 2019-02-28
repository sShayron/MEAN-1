import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-size: 12px;
            font-style: italic;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class AppComponent {
    message = {
        content: 'ESTAAAA FERA',
        author: 'Grande fera'
    }
}
