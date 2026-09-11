import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
  menuAberto: boolean = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  logout(): void {
    this.fecharMenu();
    // Adicione aqui a lógica de autenticação se houver (ex: limpar token)
    this.router.navigate(['/login']);
  }
}