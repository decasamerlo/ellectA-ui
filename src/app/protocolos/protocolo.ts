import { Eleicao } from '../eleicoes/eleicao';
import { Eleitor } from '../eleitores/eleitor';

export class Protocolo {
  id: number;
  eleicao = new Eleicao();
  eleitor = new Eleitor();
  codigo: string;
}
