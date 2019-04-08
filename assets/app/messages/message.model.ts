export class Message {
    _id: string;
    content: string;
    userId: string;
    username: string;

    constructor(props = {}) {
        Object.assign(this, props);
    }
}