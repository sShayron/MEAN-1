import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.services';
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    providers: [MessageService]
})
export class MessageListComponent implements OnInit {
    constructor(private messageService: MessageService) {
    }

    copiedMessage: Message = new Message();
    isEditing: boolean = false;
    isAdding: boolean = false;

    ngOnInit() {
        // console.log('SEAJIOIJPESAPJIOSEAJOP');  
        // this.messageService.getAllMessages();
    }

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
