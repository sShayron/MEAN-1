import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from './message.services';
import { Message } from './message.model';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html'
})
export class MessageFormComponent {
    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        const newMessage = new Message({
            messageId: Math.random() * (9999 - 1) + 1,
            content: form.value.messageContent
        });
        this.messageService.addMessage(newMessage);
        form.resetForm();
    }
}