import { IPokemon } from '@assets/interfaces'

export const GET_POKEMON = async (query: string): Promise<any> => {
  const RESPONSE = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
  const DATA: IPokemon = await RESPONSE.json()
  const POKEMON = {
    id: DATA.id,
    name: DATA.name,
    sprites: DATA.sprites
  }

  return POKEMON
}
