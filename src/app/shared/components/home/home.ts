import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

 encontrarCorrida(): void {
  if (!this.authService.estaAutenticado()) {
    this.authService.abrirLogin();
    return;
  }

  this.router.navigate(['/pageprocura']);
}
}
