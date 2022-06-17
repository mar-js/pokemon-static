import { render, screen } from "@testing-library/react"
import { DATA_DETAILS_POKEMON } from "@assets/mocks"
import { InfoPokemon } from "./"

beforeEach(() => render(<InfoPokemon {...DATA_DETAILS_POKEMON} />))

describe("InfoPokemon", () => {
  it("Render", () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
