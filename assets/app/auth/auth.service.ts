import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

interface LoginSuccessResponse {
  data: User,
  accessToken: string,
  successMessage: string
}
interface LoginErrorResponse {
  error: any
}

@Injectable()
export class AuthService {
  public user: User;
  public isAuthenticated = false;
  public authError = '';
  public error = false;
  public redirectUrl = '';
  public token = '';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      this.isAuthenticated = true;
      this.token = token;
      this.user = new User(JSON.parse(user));
      return;
    }

    if (router.url == '/mensagens') {
      alert('Voce precisa estar logado para acessar as mensagens');
      this.router.navigate(['/auth']);
    }
  }

  setSession(user, token) {
    this.user = new User(user);
    this.isAuthenticated = true;
    this.token = token;
    localStorage.setItem('token', this.token);
    localStorage.setItem('user', JSON.stringify(this.user));

    this.router.navigateByUrl('/mensagens');
  }

  login({ email, password }) {
    this.http.post('/login', { email, password }).subscribe(
      (res: LoginSuccessResponse) => {
        this.setSession(res.data, res.accessToken);
      },
      ({ error }: LoginErrorResponse) => {
        this.authError = error.errorMessage;
        this.error = true;
      }
    );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuthenticated = false;
    this.token = '';
    this.user = new User();

    this.router.navigate(['/auth']);
  }

  register({ name, lastName = '', email, password, genre }) {
    this.http.post('/register', { name, lastName, email, password, genre }).subscribe(
      (res: LoginSuccessResponse) => {
        this.setSession(res.data, res.accessToken);
      },
      ({ error }: LoginErrorResponse) => {
        this.authError = error.errorMessage;
        this.error = true;
      }
    );
  }
}
