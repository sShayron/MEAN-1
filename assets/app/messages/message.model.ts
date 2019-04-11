export class Message {
  _id: string;
  content: string;
  user: string;
  date: Date;

  constructor(props = {}) {
    Object.assign(this, props);
  }
}
