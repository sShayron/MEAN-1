import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from './message.services';
import { Message } from './message.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styles: [
    `
      .message-form {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        background: #f5f5f5;
        padding: 15px;
        border: 1px solid #ddd;
      }
    `
  ]
})
export class MessageFormComponent {
  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  onSubmit(form: NgForm) {
    if (form.value.messageContent == '') {
      return;
    }
    const newMessage = new Message({
      content: form.value.messageContent,
      user: this.authService.user._id,
      date: new Date()
    });
    this.messageService.addMessage(newMessage);
    form.resetForm();
  }
}
