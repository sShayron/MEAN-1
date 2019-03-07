import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        FormComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}