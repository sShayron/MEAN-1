import { format } from 'date-fns';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.css']
})
export class MessageComponent implements OnInit {
  @Input()
  message: Message = new Message({
    content: '',
    user: {},
    date: new Date()
  });

  @Input()
  isMy: boolean;

  @Output()
  updateMessage = new EventEmitter<Message>();

  @Output()
  removeMessage = new EventEmitter<Message>();

  @Output()
  addedMessage = new EventEmitter<Message>();

  get dataFormatada() {
    return format(this.message.date, 'DD/MM/YYYY H:mm');
  }

  onEdit() {
    this.updateMessage.emit(this.message);
  }

  onRemove() {
    this.removeMessage.emit(this.message);
  }

  onAdd() {
    this.addedMessage.emit(this.message);
  }
}
