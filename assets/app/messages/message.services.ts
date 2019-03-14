import { Message } from './message.model';

export class MessageService {
    private messagesService: Message[] = [];

    getMessages() {
        return this.messagesService;
    }

    addMessage(message: Message) {
        const idx = this.messagesService.map(m => m.messageId).indexOf(message.messageId);
        if (idx > -1) {
            console.error('Message already exists');
            return;
        }
        this.messagesService.push(message);
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