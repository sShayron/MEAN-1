import { Component, Input, Output } from '@angular/core';
import { Message } from './message.model';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-size: 12px;
            font-style: italic;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
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