import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './messages/message-list.component';
import { AuthComponent } from './auth/auth.component';
import { AUTH_ROUTES } from './auth/auth.routes';
import { AuthGuard } from './auth/auth.guard';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
  { path: 'mensagens', canLoad: [AuthGuard], component: MessageListComponent },
  { path: 'auth', component: AuthComponent, children: AUTH_ROUTES }
];

export const routes = RouterModule.forRoot(AppRoutes);