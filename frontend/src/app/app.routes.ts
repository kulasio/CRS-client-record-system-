import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
      {
        path: 'clients',
        loadComponent: () => import('./client-list/client-list.component').then(m => m.ClientListComponent),
      },
      {
        path: 'clients/add',
        loadComponent: () => import('./client-form/client-form.component').then(m => m.ClientFormComponent),
      },
      {
        path: 'clients/:id',
        loadComponent: () => import('./client-details/client-details.component').then(m => m.ClientDetailsComponent),
      },
      {
        path: 'clients/:id/edit',
        loadComponent: () => import('./client-form/client-form.component').then(m => m.ClientFormComponent),
      },
      {
        path: 'export',
        loadComponent: () => import('./export/export.component').then(m => m.ExportComponent),
      },
      {
        path: 'activity-log',
        loadComponent: () => import('./activity-log/activity-log.component').then(m => m.ActivityLogComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
