import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./pages/change-detection/change-detection.component').then(m => m.ChangeDetectionComponent)
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./pages/control-flow/control-flow.component').then(m => m.ControlFlowComponent)
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./pages/defer-options/defer-options.component').then(m => m.DeferOptionsComponent)
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./pages/defer-views/defer-views.component').then(m => m.DeferViewsComponent)
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./pages/user/user.component').then(m => m.UserComponent)
      },
      {
        path: 'user-list',
        title: 'Users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent)
      }, {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./pages/view-transition/view-transition.component').then(m => m.ViewTransitionComponent)
      }, {
        path: 'view-transition2',
        title: 'View Transition 2',
        loadComponent: () => import('./pages/view-transition/view-transition2.component').then(m => m.ViewTransition2Component)
      },
      {
        path: '', redirectTo: 'control-flow', pathMatch: 'full'
      }
    ]
  }
  ,
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
