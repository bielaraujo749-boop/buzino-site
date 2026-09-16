import { Injectable, signal } from '@angular/core';
import { Opcoes } from '../models/modelos.model';

@Injectable({
  providedIn: 'root',
})
export class OpcoesService {
  //simulação de um banco de dados das opções disponíveis
  private opcoesMock: Opcoes[] = [
    {
      id: 1,
      nome: 'Carlos Eduardo',
      carro: 'Fiat Mobi',
      placa: 'GTA-2026',
      avaliacao: 10,
      horariop: '13:30',
      duracao: 160,
      data: '16/09',
      partida: 'Centro, Rio de Janeiro - RJ',
      chegada: 'Japuíba, Angra dos Reis - RJ',
      climatizacao: 'Ar-condicionado',
      confirmacao: 'Pendente',
    },
    {
      id: 2,
      nome: 'Fernando Henrique',
      carro: 'BYD Mini Dolphin',
      placa: 'NEO-8960',
      avaliacao: 10,
      horariop: '7:00',
      duracao: 133,
      data: '18/09',
      partida: 'Jardim Nova Europa, Campinas - SP',
      chegada: 'Bela Vista, São Paulo - SP',
      climatizacao: 'Ar-condicionado',
      confirmacao: 'Confirmada',
    },
    {
      id: 3,
      nome: 'João Alberto',
      carro: 'VW Saveiro',
      placa: 'GOL-0097',
      avaliacao: 9,
      horariop: '17:40',
      duracao: 102,
      data: '16/09',
      partida: 'Limoeiro, Caratinga - MG',
      chegada: 'Bom Retiro, Ipatinga - MG',
      climatizacao: 'Sem ar-condicionado',
      confirmacao: 'Recusada',
    },
    {
      id: 4,
      nome: 'Michelle Bolsonaro',
      carro: 'Fiat Uno',
      placa: 'PLS-2200',
      avaliacao: 8,
      horariop: '8:00',
      duracao: 360,
      data: '22/09',
      partida: 'Guadalupe, Rio de Janeiro - RJ',
      chegada: 'Tatuapé, São Paulo - SP',
      climatizacao: 'Ar-condicionado',
      confirmacao: 'Pendente',
    },
    {
      id: 4,
      nome: 'Geiuson Fernandez',
      carro: 'Chevrolet Prisma',
      placa: 'YEH-5000',
      avaliacao: 9,
      horariop: '8:30',
      duracao: 320,
      data: '13/09',
      partida: 'Andaraí, Rio de Janeiro - RJ',
      chegada: 'Moema, São Paulo - SP',
      climatizacao: 'Ar-condicionado',
      confirmacao: 'Pendente',
    },
    {
      id: 5,
      nome: 'Joana dArc',
      carro: ' Renault Sandero',
      placa: 'DOM-1412',
      avaliacao: 10,
      horariop: '9:00',
      duracao: 400,
      data: '20/09',
      partida: 'Penha, Rio de Janeiro - RJ',
      chegada: 'Funcionário, Belo Horizonte - MG',
      climatizacao: 'Ar-condicionado',
      confirmacao: 'Confirmada',
    },
    {
      id: 6,
      nome: 'Valeska Popozuda',
      carro: 'Ford Ka',
      placa: 'POP-2505',
      avaliacao: 9.5,
      horariop: '12:00',
      duracao: 100,
      data: '22/09',
      partida: 'Barra, Salvador - BA',
      chegada: 'Tomba, Feira de Santana - BA',
      climatizacao: 'Ar-condicionado',
      confirmacao: 'Recusada',
    },
  ];

  //signal que guarda as caronas que o usuário reservar
  minhasCaronas = signal<Opcoes[]>([]);

  //filtra as caronas no banco de dados
  buscarCaronas(partida: string, chegada: string): Opcoes[] {
    return this.opcoesMock.filter(
      (c) =>
        c.partida.toLowerCase().includes(partida.toLowerCase()) &&
        c.chegada.toLowerCase().includes(chegada.toLowerCase()),
    );
  }

  //adiciona a carona à lista do usuário
  reservarCarona(opcoes: Opcoes): void {
    const jaReservada = this.minhasCaronas().some((c) => c.id === opcoes.id);
    if (!jaReservada) {
      this.minhasCaronas.update((listaAtual) => [...listaAtual, opcoes]);
    }
  }
}
