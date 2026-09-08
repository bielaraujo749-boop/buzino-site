import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: 'abobora',
    component: Home,
  },
  {
    path: '',
    component: Home,
  },
];
