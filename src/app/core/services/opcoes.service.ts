import { Injectable, signal } from '@angular/core';
import { Opcoes } from '../models/modelos.model';

@Injectable({
  providedIn: 'root'
})
export class OpcoesService {
  //simulação de um banco de dados das opções disponíveis
  private opcoesMock: Opcoes[] = [
    { id: 1, nome: 'Carlos Eduardo', carro: 'Fiat Mobi', placa: 'GTA-2026', avaliacao: 10, horariop: '13:30', duracao: 160, data: '16/09',  partida: 'Centro, Rio de Janeiro - RJ', chegada: 'Japuíba, Angra dos Reis - RJ', climatizacao: 'Ar-condicionado', confirmacao: 'Pendente'},
    { id: 2, nome: 'Fernando Henrique', carro: 'BYD Mini Dolphin', placa: 'NEO-8960', avaliacao: 10, horariop: '7:00', duracao: 133, data: '18/09',  partida: 'Jardim Nova Europa, Campinas - SP', chegada: 'Bela Vista, São Paulo - SP', climatizacao: 'Ar-condicionado', confirmacao: 'Confirmada'},
    { id: 3, nome: 'João Alberto', carro: 'VW Saveiro', placa: 'GOL-0097', avaliacao: 9, horariop: '17:40', duracao: 102, data: '16/09',  partida: 'Limoeiro, Caratinga - MG', chegada: 'Bom Retiro, Ipatinga - MG', climatizacao: 'Sem ar-condicionado', confirmacao: 'Recusada'}
  ];

  //signal que guarda as caronas que o usuário reservar
  minhasCaronas = signal<Opcoes[]>([]);

  //filtra as caronas no banco de dados
  buscarCaronas(partida: string, chegada: string): Opcoes[] {
    return this.opcoesMock.filter(c =>
      c.partida.toLowerCase().includes(partida.toLowerCase()) &&
      c.chegada.toLowerCase().includes(chegada.toLowerCase())
    );
  }

  //adiciona a carona à lista do usuário
  reservarCarona(opcoes: Opcoes): void {
    const jaReservada = this.minhasCaronas().some(c => c.id === opcoes.id);
    if (!jaReservada) {
      this.minhasCaronas.update(listaAtual => [...listaAtual, opcoes]);
    }
  }
}