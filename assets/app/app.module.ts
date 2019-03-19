import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { routes } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { MessageFormComponent } from './messages/message-form.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        FormComponent,
        ModalComponent,
        HeaderComponent,
        MessageFormComponent
    ],
    imports: [BrowserModule, FormsModule, routes],
    bootstrap: [AppComponent]
})
export class AppModule {

}