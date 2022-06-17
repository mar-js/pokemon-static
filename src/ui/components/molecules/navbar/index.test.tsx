import { render, screen } from "@testing-library/react"
import { Navbar } from "./"

beforeEach(() => render(<Navbar />))

describe("Navbar", () => {
  it("Render", () => {
    expect(screen.getByText(/Contact/)).toBeTruthy()
  })
})
