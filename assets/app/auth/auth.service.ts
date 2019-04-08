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

    this.router.navigate(['/auth/signin']);
  }

  login({ email, password }) {
    this.http.post('/login', { email, password }).subscribe(
      (res: LoginSuccessResponse) => {
        this.user = new User(res.data);
        this.isAuthenticated = true;
        this.token = res.accessToken;
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(this.user));

        this.router.navigate(['/mensagens']);
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

    this.router.navigate(['/auth/sigin']);
  }
}
