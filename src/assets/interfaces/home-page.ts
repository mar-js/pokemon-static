import { IGetPokemon } from './pokemon'

export interface IPageHome {
  data: IGetPokemon[];
  error: string;
}
