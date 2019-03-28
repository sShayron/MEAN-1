import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { routes } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { MessageFormComponent } from './messages/message-form.component';
import { AuthComponent } from './auth/auth.component';
import { LogOutComponent } from './auth/logout.component';
import { SignInComponent } from './auth/signin.component';
import { SignUpComponent } from './auth/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        FormComponent,
        ModalComponent,
        HeaderComponent,
        MessageFormComponent,
        AuthComponent,
        LogOutComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, routes, HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
