import { Cargo } from './../cargos/cargo';

export class Candidato {
  id: number;
  cargo = new Cargo();
  nome: string;
}
