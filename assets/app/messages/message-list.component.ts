import { Component } from '@angular/core';
import { MessageService } from './message.services';
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    providers: [MessageService]
})
export class MessageListComponent {
    constructor(private messageService: MessageService) {
        this.messageService.buckAddMessages(
            [
                new Message({
                    messageId: 1,
                    content: 'Message 1',
                    author: 'author 1'
                }),
                new Message({
                    messageId: 2,
                    content: 'Message 2',
                    author: 'author 2'
                }),
                new Message({
                    messageId: 3,
                    content: 'Message 3',
                    author: 'author 3'
                }),
                new Message({
                    messageId: 4,
                    content: 'Message 4',
                    author: 'author 4'
                })
            ]
        )
    }

    copiedMessage: Message = new Message();
    isEditing: boolean = false;
    isAdding: boolean = false;

    close() {
        this.isAdding = false;
        this.isEditing = false;
    }

    onRemoveMessage(msg: Message) {
        this.messageService.removeMessage(msg);
    }

    onEditMessage(message: Message) {
        this.copiedMessage = new Message({...message});
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