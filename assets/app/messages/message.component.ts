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

    copiedMessage: Message = new Message();

    isEditing: boolean = false;

    editMessage() {
        this.copiedMessage = new Message({...this.message});
        this.isEditing = true;
    }

    onEdit() {
        this.updateMessage.emit(this.copiedMessage);
        this.isEditing = false;
        this.copiedMessage = new Message();
    }

    onRemove() {
        this.removeMessage.emit(this.message);
    }
}