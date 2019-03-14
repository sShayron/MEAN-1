import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.css']
})
export class MessageComponent {
    @Input()
    message: Message = new Message({
        content: '',
        author: ''
    });

    @Output()
    updateMessage = new EventEmitter<Message>();

    @Output()
    removeMessage = new EventEmitter<Message>();

    onEdit() {
        this.updateMessage.emit(this.message);
    }

    onRemove() {
        this.removeMessage.emit(this.message);
    }
}