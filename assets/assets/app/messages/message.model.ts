export class Message {
    messageId: string;
    content: string;
    userId: string;
    username: string;

    constructor(props = {}) {
        Object.assign(this, props);
    }
}