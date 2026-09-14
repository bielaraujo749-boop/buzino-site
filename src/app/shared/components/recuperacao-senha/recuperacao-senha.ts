import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-recuperacao-senha',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './recuperacao-senha.html',
  styleUrl: './recuperacao-senha.css'
})
export class RecuperacaoSenha {

  private readonly fb = inject(FormBuilder);

  @Output()
  fechar = new EventEmitter<void>();


  recuperacaoEnviada = false;


  recuperacaoForm = this.fb.nonNullable.group({

    email: ['', [
      Validators.required,
      Validators.email
    ]]

  });


  enviarRecuperacao(): void {

    if (this.recuperacaoForm.invalid) {

      this.recuperacaoForm.markAllAsTouched();

      return;
    }


    const email = this.recuperacaoForm.controls.email.value;

    console.log('E-mail para recuperação:', email);


    /*
     * FUTURAMENTE:
     *
     * Aqui enviaremos o e-mail para a API.
     *
     * A API será responsável por enviar
     * o e-mail de recuperação de senha.
     */


    this.recuperacaoEnviada = true;
  }


  voltarParaLogin(): void {

    this.fechar.emit();

  }


  get email() {
    return this.recuperacaoForm.controls.email;
  }

}