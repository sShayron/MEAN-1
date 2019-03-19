import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './messages/message-list.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
    { path: 'mensagens', component: MessageListComponent }
];

export const routes = RouterModule.forRoot(AppRoutes);