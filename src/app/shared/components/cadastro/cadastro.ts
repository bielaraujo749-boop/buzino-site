import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  erroCadastro = '';

  cadastroForm = this.fb.nonNullable.group({

    nomeCompleto: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]],

    idade: [0, [
      Validators.required,
      Validators.min(18),
      Validators.max(120)
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    senha: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],

    confirmarSenha: ['', [
      Validators.required
    ]],

    termos: [false, [
      Validators.requiredTrue
    ]]

  }, {
    validators: this.senhasIguais
  });


  /**
   * Verifica se a senha e a confirmação
   * são iguais.
   */
  senhasIguais(
    control: AbstractControl
  ): ValidationErrors | null {

    const senha = control.get('senha')?.value;
    const confirmarSenha = control.get('confirmarSenha')?.value;

    if (!senha || !confirmarSenha) {
      return null;
    }

    return senha === confirmarSenha
      ? null
      : { senhasDiferentes: true };
  }


  /**
   * Executado quando o usuário tenta
   * criar a conta.
   */

  cadastrar(): void {

  if (this.cadastroForm.invalid) {
    this.cadastroForm.markAllAsTouched();
    return;
  }

  const dados = this.cadastroForm.getRawValue();

  console.log('Dados do cadastro:', dados);

  const sucesso = this.authService.cadastrar({
    nome: dados.nomeCompleto,
    email: dados.email,
    senha: dados.senha,
    idade: dados.idade
  });

  if (!sucesso) {
    this.erroCadastro = 'Este e-mail já está cadastrado.';
    return;
  }

  this.erroCadastro = '';

  this.router.navigate(['/']).then(() => {
  this.authService.abrirLogin();
});
}
  
  fecharCadastro(): void {
    this.router.navigate(['/']);
  }

  get nomeCompleto() {
    return this.cadastroForm.controls.nomeCompleto;
  }


  get idade() {
    return this.cadastroForm.controls.idade;
  }


  get email() {
    return this.cadastroForm.controls.email;
  }


  get senha() {
    return this.cadastroForm.controls.senha;
  }


  get confirmarSenha() {
    return this.cadastroForm.controls.confirmarSenha;
  }


  get termos() {
    return this.cadastroForm.controls.termos;
  }

}