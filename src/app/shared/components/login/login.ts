import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RecuperacaoSenha } from '../recuperacao-senha/recuperacao-senha';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RecuperacaoSenha],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  erroLogin = '';

  @Output() fechar = new EventEmitter<void>();

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],

    senha: ['', [Validators.required]],
  });

  logar(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, senha } = this.loginForm.getRawValue();

    const sucesso = this.authService.login(email, senha);

    if (!sucesso) {
      this.erroLogin = 'E-mail ou senha incorretos.';
      return;
    }

    this.erroLogin = '';

    this.fecharLogin();

    this.router.navigate(['/']);
  }

  fecharLogin(): void {
    this.fechar.emit();
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get senha() {
    return this.loginForm.controls.senha;
  }

  recuperacaoAberta = false;

  abrirRecuperacao(): void {
    this.recuperacaoAberta = true;
  }

  fecharRecuperacao(): void {
    this.recuperacaoAberta = false;
  }

  /*logar(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    

    const dadosLogin = this.loginForm.getRawValue();

    console.log('Dados de login:', dadosLogin);
    this.router.navigate(['/dashboard']);
  }

  fecharLogin(): void {
    this.fechar.emit();
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get senha() {
    return this.loginForm.controls.senha;
  }

  
  recuperacaoAberta = false;


  abrirRecuperacao(): void {
    this.recuperacaoAberta = true;
  }


  fecharRecuperacao(): void {
    this.recuperacaoAberta = false;
  } 
    */
}
