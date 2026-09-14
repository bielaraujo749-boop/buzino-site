import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Opcoes } from '../../../core/models/modelos.model';
import { HorariocPipe } from '../../../pipes/horarioc-pipe';

@Component({
  imports: [CommonModule, HorariocPipe],
  selector: 'app-cardcaronas',
  styleUrl: './cardcaronas.css',
  templateUrl: './cardcaronas.html',
})
export class Cardcaronas {
  @Input({ required: true }) opcoes!: Opcoes;
  @Input() modoVisualizacao: boolean = false;

  @Output() reservar = new EventEmitter<Opcoes>();

  exibirModalSucesso: boolean = false;

  onReservar(): void {
    this.reservar.emit(this.opcoes);
    this.exibirModalSucesso = true; // Abre o modal ao clicar em reservar
  }

  fecharModal(): void {
    this.exibirModalSucesso = false;
  }
}