import { useState } from 'react'

import { IGetPokemons } from '@assets/interfaces'

export const useGetPokemons = async (): Promise<any[]> => {
  const [ state, setState ] = useState<IGetPokemons | any>()

  try {
    const RESPONSE = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const DATA: IGetPokemons = await RESPONSE.json()

    setState(DATA.results)

    return [ state ]
  } catch (error) {
    console.log('ERROR IN useGetPokemons FROM assets/hooks/getPokemons: ', error)

    setState(error)

    return [ state ]
  }
}
