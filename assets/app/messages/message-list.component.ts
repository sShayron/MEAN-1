import * as io from 'socket.io-client';
import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.services';
import { Message } from './message.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  providers: [MessageService, AuthService],
  styles: [
    `
      .message-list {
        max-height: calc(100vh - 200px);
        overflow-y: auto;
      }
    `
  ]
})
export class MessageListComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  copiedMessage: Message = new Message();
  isEditing: boolean = false;
  isAdding: boolean = false;

  ngOnInit() {
    const socket = io();
    let self = this;
    socket.on('new-message', function (msg) {
      const existMessage = self.messageService
        .getMessages()
        .filter(x => x._id == msg._id);
      if (!existMessage.length) {
        self.messageService.getAllMessages();
      }
      self.scrollBottom();
    });
    socket.on('delete-message', function(msg) {
      const existMessage = self.messageService
        .getMessages()
        .filter(x => x._id == msg._id);
      if (existMessage.length) {
        self.messageService.getAllMessages();
      }
    });
    this.messageService.getAllMessages();
    this.scrollBottom();
  }

  scrollBottom() {
    setTimeout(() => {
      const objDiv = document.querySelector('.message-list');
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 1500);
  }

  isUserMessage(msg) {
    return msg.user._id === this.authService.user._id;
  }

  close() {
    this.isAdding = false;
    this.isEditing = false;
  }

  onRemoveMessage(msg: Message) {
    this.messageService.removeMessage(msg);
  }

  onEditMessage(message: Message) {
    this.copiedMessage = new Message({ ...message });
    this.isEditing = true;
  }

  onDone() {
    if (this.isEditing) {
      this.messageService.updateMessage(this.copiedMessage);
    }
    if (this.isAdding) {
      this.messageService.addMessage(this.copiedMessage);
    }
    this.close();
    this.copiedMessage = new Message();
  }
}
