import { Routes } from '@angular/router';
import { Home } from './shared/components/home/home';
import { SuporteComponent } from './shared/components/suporte/suporte';
import { Pageprocura } from './shared/components/pageprocura/pageprocura';
import { Minhascaronas } from './shared/components/minhascaronas/minhascaronas';
import { Dashboard } from './shared/components/dashboard/dashboard';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    title: 'Buzinô - Suas caronas simples e econômicas'
  },
  { 
    path: 'suporte', 
    component:SuporteComponent,
    title: 'Buzinô - Central de Suporte'
  },
  { 
    path: 'pageprocura', 
    component: Pageprocura,
    title: 'Buzinô - Encontrar Carona'
  },
  { 
    path: 'dashboard', 
    component: Dashboard 
  },
  { 
    path: 'minhas-caronas', 
    component: Minhascaronas 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];