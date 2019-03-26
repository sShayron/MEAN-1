import { Component } from "@angular/core";

@Component({
    selector: 'app-auth',
    template: `
        <div class="auth">
            <nav>
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active">
                        <a [routerLink]="['signup']">SignUp</a>
                    </li>
                    <li routerLinkActive="active">
                        <a [routerLink]="['signin']">SignUp</a>
                    </li>
                    <li routerLinkActive="active">
                        <a [routerLink]="['logout']">SignUp</a>
                    </li>
                </ul>
            </nav>
            <div class="auth-wrapper">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

export class AuthComponent {
}