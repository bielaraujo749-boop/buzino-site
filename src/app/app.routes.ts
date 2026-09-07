import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Cadastro } from './features/cadastro/cadastro';



// Adicionar quando a dashboard for criada

/* export class DashboardComponent {
  authService = inject(AuthService);
} */

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: 'cadastro',
        component: Cadastro
    },

   /* {
        path: 'dashboard',
        component: Dashboard
    } */
    { 
        path: '**', 
        redirectTo: '' 
    }
];
