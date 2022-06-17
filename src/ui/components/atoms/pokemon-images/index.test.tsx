import { render, screen } from "@testing-library/react"
import { PokemonImages } from "./"
import { DATA_POKEMON_IMAGES } from "@assets/mocks"

beforeEach(() => render(<PokemonImages {...DATA_POKEMON_IMAGES} />))

describe("PokemonImages", () => {
  it("Render", () => {
    expect(screen).toBeTruthy()
  })
})
