import { render, screen } from '@testing-library/react'

import { IPokemonImages } from '@assets/interfaces'

import { PokemonImages } from './'

beforeEach(() => {
  const DATA: IPokemonImages = {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
  }

  return render(<PokemonImages { ...DATA } />)
})

describe('PokemonImages Component', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })
})
