import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

const handleErrors = err => {
  alert(err.errorMessage);
  console.log(err);
};

@Injectable()
export class MessageService {
  private messagesService: Message[] = [];
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    if (this.authService.isAuthenticated) {
      this.headers = new HttpHeaders({
        Authorization: this.authService.token
      });
    }
  }

  getMessages() {
    return this.messagesService;
  }

  getAllMessages() {
    return this.http
      .get('/message/', { headers: this.headers })
      .subscribe(
        (res: { data: Message[] }) => this.buckAddMessages(res.data),
        err => handleErrors(err)
      );
  }

  addMessage(message: Message): Observable<any> {
    const idx = this.messagesService.map(m => m._id).indexOf(message._id);
    if (idx > -1) {
      console.error('Message already exists');
      return;
    }
    this.http
      .post(
        '/message/',
        { content: message.content },
        { headers: this.headers }
      )
      .subscribe(
        (res: { data: Message }) => this.messagesService.push(res.data),
        err => handleErrors(err)
      );
  }

  removeMessage(message: Message) {
    this.http
      .delete(`/message/${message._id}`, { headers: this.headers })
      .subscribe(
        () => {
          this.messagesService = this.messagesService.filter(
            m => m._id !== message._id
          );
        },
        err => handleErrors(err.error)
      );
  }

  updateMessage(message: Message) {
    const idx = this.messagesService.map(m => m._id).indexOf(message._id);
    this.messagesService.splice(idx, 1, message);
  }

  buckAddMessages(messages: Message[]) {
    this.messagesService = [...this.messagesService, ...messages];
  }
}
