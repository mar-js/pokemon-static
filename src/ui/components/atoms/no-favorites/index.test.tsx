import { render, screen } from "@testing-library/react"

import { NoFavorites } from "./"

beforeEach(() => render(<NoFavorites />))

describe("NoFavorites", () => {
  it("Render", () => {
    expect(screen.getByText(/You don't have favorite pokemons./)).toBeTruthy()
  })
})
