import { Component } from '@angular/core';
@Component({
selector: 'app-suporte',
templateUrl: './suporte.html',
styleUrls: ['./suporte.css']
})
export class SuporteComponent {
mensagemOrientacao = '';
private readonly whatsappNumero = '5521981446564';
mostrarOrientacao(mensagem: string): void {
this.mensagemOrientacao = mensagem;
setTimeout(() => {
const elemento = document.getElementById('mensagem-orientacao');
if (elemento) {
elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
});
}
problemasSite(): void {
this.mostrarOrientacao(
'Se você está com problemas no site, tente atualizar a página e verificar sua conexão com a internet. Se o problema continuar, descreva o que aconteceu no formulário abaixo para falar com o suporte,'
);
}

minhaConta(): void {
this.mostrarOrientacao(
'Para problemas relacionados à sua conta, informe no formulário o que está acontecendo, como dificuldades para entrar, acessar seus dados ou utilizar algum recurso da conta.'
);
}

pagamentos(): void {
this.mostrarOrientacao(
'Se houver algum problema com um pagamento, confira se os dados estão corretos e aguarde a confirmação. Caso o pagamento continue sem aparecer, envie os detalhes pelo formulário para que o suporte possa ajudar.'
);
}

suporteTecnico(): void {
this.mostrarOrientacao(
'Se você encontrou um erro técnico, explique no formulário o que estava fazendo, qual erro apareceu e, se possível, quando o problema começou. Essas informações ajudam o suporte a entender a situação.'
);
}

outrosAssuntos(): void {
const mensagem = encodeURIComponent(
'Olá, gostaria de falar com o suporte do Buzinô.'
);
const url = `https://wa.me/${this.whatsappNumero}?text=${mensagem}`;
window.open(url, '_blank');
}

enviarMensagem(event: Event): void {
event.preventDefault();
const formulario = event.target as HTMLFormElement;
const dados = new FormData(formulario);
const nome = String(dados.get('nome') || '').trim();
const email = String(dados.get('email') || '').trim();
const mensagem = String(dados.get('mensagem') || '').trim();
if (!nome || !email || !mensagem) {
this.mostrarOrientacao(
'Preencha seu nome, e-mail e a mensagem antes de enviar.'
);
return;
}
const mensagemWhatsApp =
`Meu nome é ${nome}, meu e-mail é ${email}. ` +
`Minha dúvida ou problema é: ${mensagem}`;
const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);
const url =
`https://wa.me/${this.whatsappNumero}?text=${mensagemCodificada}`;
window.open(url, '_blank');
formulario.reset();
}
}