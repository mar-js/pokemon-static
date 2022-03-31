import { render, screen } from '@testing-library/react'

import { IDetailsPokemon } from '@assets/interfaces'

import { DetailsPokemon } from './'

beforeEach(() => {
  const DATA: IDetailsPokemon = {
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    name: 'Pikachu',
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
    }
  }

  return render(<DetailsPokemon { ...DATA } />)
})

describe('DetailsPokemon Component', () => {
  it('Render', () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
