import { render, screen } from "@testing-library/react"
import { DATA_SEO } from "@assets/mocks"
import { Seo } from "./"

beforeEach(() => render(<Seo {...DATA_SEO} />))

describe("Seo Helpers", () => {
  it("Render", () => {
    expect(screen).toBeTruthy()
  })
})
