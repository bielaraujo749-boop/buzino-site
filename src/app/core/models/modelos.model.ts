export type StatusCarona = 'Pendente' | 'Confirmada' | 'Recusada';

export interface Opcoes { //será usado nos cards de opções que serão colocados na pégina de procura e de "minhas caronas"
    id: number;
    nome: string;
    carro: string;
    placa: string;
    avaliacao: number;
    horariop: string; //no formato hh:mm
    duracao: number; //duração em minutos
    data: string;
    partida: string;
    chegada: string;
    climatizacao: string;
    confirmacao: StatusCarona;
}

export interface ProcurarViagem { //será usado apenas no procurador de caronas
    partida: string;
    chegada: string;
    data: string;
}