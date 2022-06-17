import { render, screen } from "@testing-library/react"
import { DATA_POKEMON_TEXT } from "@assets/mocks"
import { PokemonText } from "./"

beforeEach(() => render(<PokemonText {...DATA_POKEMON_TEXT} />))

describe("PokemonText", () => {
  it("Render", () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
