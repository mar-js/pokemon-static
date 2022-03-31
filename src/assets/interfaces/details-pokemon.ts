import { IPokemonImages } from './pokemon-images'

export interface IDetailsPokemon {
  img: string;
  id: number;
  name: string;
  sprites: IPokemonImages;
}
