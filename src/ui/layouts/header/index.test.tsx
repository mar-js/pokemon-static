import { render, screen } from "@testing-library/react"
import { Header } from "./"

beforeEach(() => render(<Header />))

describe("Header", () => {
  it("Render", () => {
    expect(screen).toBeTruthy()
  })

  it("Redirct", () => {
    expect(screen.getByText(/P/)).toHaveAttribute("href", "/")
  })
})
