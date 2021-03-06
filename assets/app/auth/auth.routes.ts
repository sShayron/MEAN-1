import { Routes } from '@angular/router';
import { SignUpComponent } from './signup.component';
import { SignInComponent } from './signin.component';

export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent }
];
