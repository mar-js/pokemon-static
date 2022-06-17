import { render, screen } from "@testing-library/react"
import { DATA_POKEMON_NAME } from "@assets/mocks"
import { PokemonName } from "./"

beforeEach(() => render(<PokemonName {...DATA_POKEMON_NAME} />))

describe("PokemonName", () => {
  it("Render", () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
