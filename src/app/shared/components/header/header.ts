import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  private readonly authService = inject(AuthService);

  @Output() abrirLogin = new EventEmitter<void>();

  estaAutenticado(): boolean {
  return this.authService.estaAutenticado();
}

abrirLoginModal(): void {
   this.authService.abrirLogin();
}
  
  menuAberto: boolean = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  logout(): void {
      this.authService.logout();

      this.fecharMenu();

      this.router.navigate(['/']);
  }
}