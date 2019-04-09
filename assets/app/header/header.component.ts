import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .nav {
        margin-bottom: 15px;
      }
      .glyphicon {
        cursor: pointer;
        font-size: 20px;
        width: 35px;
        text-align: right;
        padding: 3px;
      }
      .logout {
        position: absolute;
        border: 1px solid #ddd;
        padding: 10px;
        background: #fff;
        border-radius: 3px;
      }
      .btn {
        min-width: 250px;
      }
    `
  ]
})
export class HeaderComponent {
  showOptions = false;
  constructor(private authService: AuthService) {}

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  exit() {
    this.showOptions = false;
    this.authService.logOut();
  }
}
