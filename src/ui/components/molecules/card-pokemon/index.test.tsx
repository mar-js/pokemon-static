import { render, screen } from "@testing-library/react"
import { DATA_CARD_POKEMON } from "@assets/mocks"
import { CardPokemon } from "./"

beforeEach(() => render(<CardPokemon {...DATA_CARD_POKEMON} />))

describe("CardPokemon", () => {
  it("Render", () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
