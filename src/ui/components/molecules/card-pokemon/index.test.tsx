import { render, screen } from '@testing-library/react'

import { ICardPokemon } from '@assets/interfaces'

import { CardPokemon } from './'

beforeEach(() => {
  const DATA: ICardPokemon = {
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    id: 1,
    name: 'Pikachu',
    text: true
  }

  return render(<CardPokemon { ...DATA } />)
})

describe('CardPokemon Component', () => {
  it('Render', () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
