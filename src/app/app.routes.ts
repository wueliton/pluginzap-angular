import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component')
  },
  {
    path: 'app',
    loadChildren: () => import('./application/application.routes')
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
