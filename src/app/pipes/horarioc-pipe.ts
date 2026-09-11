import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horarioc',
})
export class HorariocPipe implements PipeTransform {
  transform(horariop: string, duracao: number): string {
    if (!horariop || duracao === undefined || duracao < 0) return '';

    //separando a string do formato hh:mm e convertendo-a para números
    const [horasp, minutosp] = horariop.split(':').map(Number);

    //convertendo o horário de partida em minutos
    const minutosSaidaTotais = (horasp * 60) + minutosp;

    //somando a duração da viagem
    const minutosTotais = minutosSaidaTotais + duracao;
    
    //convertendo de volta para o formato inicial
    let horasChegada = Math.floor(minutosTotais / 60) % 24; //%24 para as viagens que possam virar a noite
    const minutosChegada = minutosTotais % 60;

    //formatando em hh:mm
    const hh = horasChegada.toString().padStart(2, '0');
    const mm = minutosChegada.toString().padStart(2, '0');

    return `${hh}:${mm}`;
  }
}
