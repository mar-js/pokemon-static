import { IGetPokemons, IGetPathsProps } from '@assets/interfaces'

export const GET_VALUE_PARAMS = async (query: string): Promise<any> => {
  try {
    const RESPONSE = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const DATA: IGetPokemons = await RESPONSE.json()

    if (query.toLocaleLowerCase() === 'name') {
      const NAMES: IGetPathsProps[] = DATA.results.map(({ name }) => ({
        params: { name }
      }))

      return NAMES
    }

    if (query === 'id') {
      const IDS: IGetPathsProps[] = DATA.results.map((pokemon, index) => ({
        params: {
          id: `${index + 1}`
        }
      }))

      return IDS
    }
  } catch (error) {
    console.log('ERROR IN GET_VALUE_PARAMS FROM helpers/get-value-params: ', error)

    return null
  }
}
