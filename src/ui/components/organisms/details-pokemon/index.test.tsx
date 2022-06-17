import { render, screen } from "@testing-library/react"
import { DATA_DETAILS_POKEMON } from "@assets/mocks"
import { DetailsPokemon } from "./"

beforeEach(() => render(<DetailsPokemon {...DATA_DETAILS_POKEMON} />))

describe("DetailsPokemon", () => {
  it("Render", () => {
    expect(screen.getByText(/Pikachu/)).toBeTruthy()
  })
})
