import { Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';

export const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component')
      },
      {
        path: 'contact-list',
        loadComponent: () => import('./contact-list/contact-list.component')
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

export default routes;
