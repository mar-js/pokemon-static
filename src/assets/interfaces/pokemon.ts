export interface IGetPokemons {
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface IGetPokemon {
  id: number;
  name: string;
  url: string;
  img: string;
}
