import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Usuario } from '../models/modelos.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEY = 'buzino-usuarios';
  private readonly SESSION_KEY = 'buzino-usuario';

  private readonly browser: boolean;

  private usuarios = signal<Usuario[]>([]);
  private usuarioAtual = signal<Usuario | null>(null);

  constructor(
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.browser = isPlatformBrowser(platformId);

    if (this.browser) {
      this.carregarDados();
    }
  }

  cadastrar(dados: Omit<Usuario, 'id'>): boolean {

  const usuarios = this.usuarios();

  const emailExiste = usuarios.some(
    usuario => usuario.email.toLowerCase() === dados.email.toLowerCase()
  );

  if (emailExiste) {
    return false;
  }

  const novoUsuario: Usuario = {
    id: Date.now(),
    ...dados
  };

  const novaLista = [...usuarios, novoUsuario];

  this.usuarios.set(novaLista);

  this.salvarUsuarios();

  return true;
}

login(email: string, senha: string): boolean {

  const usuario = this.usuarios().find(
    usuario =>
      usuario.email.toLowerCase() === email.toLowerCase() &&
      usuario.senha === senha
  );

  if (!usuario) {
    return false;
  }

  this.usuarioAtual.set(usuario);

  if (this.browser) {
    localStorage.setItem(
      this.SESSION_KEY,
      JSON.stringify(usuario)
    );
  }

  return true;
}

logout(): void {

  this.usuarioAtual.set(null);

  if (this.browser) {
    localStorage.removeItem(this.SESSION_KEY);
        }
    }
    estaAutenticado(): boolean {
  return this.usuarioAtual() !== null;
}

getUsuarioAtual(): Usuario | null {
  return this.usuarioAtual();
}

private carregarDados(): void {

  const usuariosSalvos = localStorage.getItem(this.STORAGE_KEY);

  if (usuariosSalvos) {
    this.usuarios.set(JSON.parse(usuariosSalvos));
  }

  const usuarioSalvo = localStorage.getItem(this.SESSION_KEY);

  if (usuarioSalvo) {
    this.usuarioAtual.set(JSON.parse(usuarioSalvo));
  }
}

private salvarUsuarios(): void {

  if (!this.browser) {
    return;
  }

  localStorage.setItem(
    this.STORAGE_KEY,
    JSON.stringify(this.usuarios())
  );
}

loginModalAberto = signal(false);

abrirLogin(): void {
  this.loginModalAberto.set(true);
}

fecharLogin(): void {
  this.loginModalAberto.set(false);
}

}