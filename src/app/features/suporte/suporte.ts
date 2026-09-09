import { Component } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.html',
  styleUrl: './suporte.css'
})
export class SuporteComponent {

  mensagemOrientacao = '';

  problemasSite(): void {
    this.mensagemOrientacao =
      'Você está com problemas no site. Tente atualizar a página e verificar sua conexão com a internet.';
  }

  minhaConta(): void {
    this.mensagemOrientacao =
      'Para problemas com sua conta, verifique seus dados de acesso e tente novamente.';
  }

  minhaCarona(): void {
    this.mensagemOrientacao =
      'Para problemas com uma carona, verifique as informações da viagem e entre em contato com o suporte se precisar de ajuda.';
  }

  suporteTecnico(): void {
    this.mensagemOrientacao =
      'Encontrou um erro técnico? Informe o que aconteceu para que nossa equipe possa ajudar.';
  }

  outrosAssuntos(): void {
    this.abrirWhatsapp();
  }

  enviarMensagem(): void {
    this.abrirWhatsapp();
  }

  abrirWhatsapp(): void {
    window.open(
      'https://wa.me/5521981446564?text=Olá,%20preciso%20de%20ajuda%20com%20o%20Buzinô.',
      '_blank'
    );
  }

  voltarHome(): void {
    window.location.href = '/';
  }

}