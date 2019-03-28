import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {
    private messagesService: Message[] = [];

    constructor(private http: HttpClient) { }

    getMessages() {
        return this.messagesService;
    }

    getAllMessages() {
        return this.http.get('/message/')
            .subscribe((res: { data: Message[] }) => this.buckAddMessages(res.data));
    }

    addMessage(message: Message): Observable<any> {
        const idx = this.messagesService.map(m => m.messageId).indexOf(message.messageId);
        if (idx > -1) {
            console.error('Message already exists');
            return;
        }
        this.http.post('/message/', { content: message.content })
            .subscribe((res: { data: Message }) => this.messagesService.push(res.data));
    }

    removeMessage(message: Message) {
        this.messagesService = this.messagesService.filter(m => m.messageId !== message.messageId);
    }

    updateMessage(message: Message) {
        const idx = this.messagesService.map(m => m.messageId).indexOf(message.messageId);
        this.messagesService.splice(idx, 1, message);
    }

    buckAddMessages(messages: Message[]) {
        this.messagesService = [...this.messagesService, ...messages];
    }
}
