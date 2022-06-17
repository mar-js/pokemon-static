import { render, screen } from "@testing-library/react"
import { Main } from "./"

beforeEach(() =>
  render(
    <Main>
      <p>Hello</p>
    </Main>
  )
)

describe("Main", () => {
  it("Render", () => {
    expect(screen.getByText(/Hello/)).toBeTruthy()
  })
})
