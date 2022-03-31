import { render, screen } from '@testing-library/react'

import { IInfoPokemon } from '@assets/interfaces'

import { InfoPokemon } from './'

beforeEach(() => {
  const DATA: IInfoPokemon = {
    name: 'Pikachu',
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
    }
  }

  return render(<InfoPokemon { ...DATA } />)
})

describe('InfoPokemon Component', () => {
  it('Render', () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
