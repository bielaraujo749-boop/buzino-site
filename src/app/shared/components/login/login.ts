import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RecuperacaoSenha } from '../recuperacao-senha/recuperacao-senha';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
     RecuperacaoSenha
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  @Output() fechar = new EventEmitter<void>();

  loginForm = this.fb.nonNullable.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    senha: ['', [
      Validators.required
    ]]
  });

  logar(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    

    const dadosLogin = this.loginForm.getRawValue();

    console.log('Dados de login:', dadosLogin);

    /*
     * FUTURAMENTE:
     * aqui faremos a autenticação real.
     *
     * Por enquanto, vamos apenas encaminhar
     * para a futura página após o login.
     */

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

}