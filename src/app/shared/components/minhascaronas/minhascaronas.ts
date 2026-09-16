import { Component } from '@angular/core';
import { OpcoesService } from '../../../core/services/opcoes.service';
import { Cardcaronas } from '../cardcaronas/cardcaronas';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Cardcaronas, RouterLink],
  standalone: true,
  selector: 'app-minhascaronas',
  styleUrl: './minhascaronas.css',
  templateUrl: './minhascaronas.html',
})
export class Minhascaronas {
  //injeta o service publicamente para usar o signal diretamente no HTML
  constructor(public opcoesService: OpcoesService) {}
}
