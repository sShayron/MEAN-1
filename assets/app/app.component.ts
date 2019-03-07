// https://angular.io/guide/ajs-quick-reference
import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
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

    onUpdateMessage(msg: Message) {
        const idx = this.messages.map(m => m.messageId).indexOf(msg.messageId);
        this.messages.splice(idx, 1, msg);
    }

    onRemoveMessage(msg: Message) {
        this.messages = this.messages.filter(m => m.messageId !== msg.messageId);
    }
}