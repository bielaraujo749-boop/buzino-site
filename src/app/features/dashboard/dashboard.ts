import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  nome = signal('Matheus Carvalho');

  email = signal('matheuscarvalho28@gmail.com');

  funcao = signal('Passageiro');

  idioma = signal('Português');

  menuSelecionado = signal('Perfil');

  selecionarMenu(menu: string): void {
    this.menuSelecionado.set(menu);
  }

  sair(): void {
    console.log('Usuário saiu da conta');
  }

}