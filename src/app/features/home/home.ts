import { Component, signal } from '@angular/core';
import { Login } from '../login/login';

@Component({
  imports: [Login],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  loginAberto = signal(false);

   abrirLogin(): void {
    this.loginAberto.set(true);
  } 

  fecharLogin(): void {
    this.loginAberto.set(false);
  } 
}
