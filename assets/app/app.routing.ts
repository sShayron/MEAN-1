import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './messages/message-list.component';
import { AuthComponent } from './auth/auth.component';
import { AUTH_ROUTES } from './auth/auth.routes';

const AppRoutes: Routes = [
    { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
    { path: 'mensagens', component: MessageListComponent },
    { path: 'auth', component: AuthComponent, children: AUTH_ROUTES }
];

export const routes = RouterModule.forRoot(AppRoutes);