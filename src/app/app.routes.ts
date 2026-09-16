import { Routes } from '@angular/router';
import { Home } from './shared/components/home/home';
import { SuporteComponent } from './shared/components/suporte/suporte';
import { Pageprocura } from './shared/components/pageprocura/pageprocura';
import { Minhascaronas } from './shared/components/minhascaronas/minhascaronas';
import { Dashboard } from './shared/components/dashboard/dashboard';
import { Cadastro } from './shared/components/cadastro/cadastro';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    title: 'Buzinô - Suas caronas simples e econômicas'
  },

  {
    path: 'cadastro',
    component: Cadastro,
    title: 'Buzinô - Cadastro'
  },
  { 
    path: 'suporte', 
    component:SuporteComponent,
    title: 'Buzinô - Central de Suporte'
  },
  { 
    path: 'pageprocura',
  component: Pageprocura,
  canActivate: [authGuard],
  title: 'Buzinô - Encontrar Carona'
  },
  { 
     path: 'dashboard',
  component: Dashboard,
  canActivate: [authGuard],
  title: 'Buzinô - Meus dados'
  },
  { 
    path: 'minhas-caronas',
  component: Minhascaronas,
  canActivate: [authGuard],
  title: 'Buzinô - Minhas caronas'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];