import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  usuario = this.authService.getUsuarioAtual();

  idioma = 'Português';

  sair(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  voltarHome(): void {
    this.router.navigate(['/']);
  }

  menuSelecionado = signal('Perfil');

  selecionarMenu(menu: string): void {
    this.menuSelecionado.set(menu);
  }
}
