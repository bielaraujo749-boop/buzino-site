import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { SuporteComponent } from './features/suporte/suporte';

export const routes: Routes = [
  {
    path: 'suporte',
    component: SuporteComponent,
  },
  {
    path: '',
    component: Home,
  },

{
  path: 'dashboard',
  loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
}
];
