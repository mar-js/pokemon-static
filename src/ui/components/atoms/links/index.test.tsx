import { render, screen } from "@testing-library/react"

import { Links } from "./"

beforeEach(() => render(<Links />))

describe("Links", () => {
  it("Render", () => {
    expect(screen.getByText(/Favorites/)).toBeTruthy()
  })

  it("Redirect", () => {
    expect(screen.getByText(/Favorites/)).toHaveAttribute("href", "/favorites")
  })
})
