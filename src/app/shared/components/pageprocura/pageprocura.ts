import { Component } from '@angular/core';
import { Opcoes } from '../../../core/models/modelos.model';
import { OpcoesService } from '../../../core/services/opcoes.service';
import { Formsprocura } from '../formsprocura/formsprocura';
import { Cardcaronas } from '../cardcaronas/cardcaronas';

@Component({
  imports: [Formsprocura, Cardcaronas],
  standalone: true,
  selector: 'app-pageprocura',
  styleUrl: './pageprocura.css',
  templateUrl: './pageprocura.html'
})
export class Pageprocura {
  caronasEncontradas: Opcoes[] = []
  buscaRealizada: boolean = false;

  constructor(private opcoesService: OpcoesService) {}

  onBuscar(filtros: { partida: string; chegada: string}): void {
    this.caronasEncontradas = this.opcoesService.buscarCaronas(filtros.partida, filtros.chegada);
    this.buscaRealizada = true;
  }

  onReservar(opcoes: Opcoes): void {
    this.opcoesService.reservarCarona(opcoes);
    alert(`Carona de ${opcoes.nome} reservada com sucesso!`);
  }
}
