import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { Login } from './shared/components/login/login';
import { AuthService } from './core/services/auth.service';

@Component({
  imports: [RouterOutlet, Header, Footer, Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
 readonly authService = inject(AuthService);
 private readonly router = inject(Router);

  get loginAberto(): boolean {
  return this.authService.loginModalAberto();
}

fecharLogin(): void {
  this.authService.fecharLogin();
}

constructor() { 
  this.router.events
   .pipe( filter(event => event instanceof NavigationEnd) 
  )
    .subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      if (url.includes('login=true')) {
        this.authService.abrirLogin();
        
        this.router.navigate([], {
          queryParams: {},
          replaceUrl: true
        });
      }
    });
  }
}
