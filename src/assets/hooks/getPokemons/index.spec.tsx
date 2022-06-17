import React from "react"
import { waitFor } from "@testing-library/react"
import { DATA_USE_GET_POKEMONS } from "@assets/mocks"
import { useGetPokemons } from "./"

beforeEach(() => {
  React.useState = jest
    .fn()
    .mockReturnValueOnce([DATA_USE_GET_POKEMONS, jest.fn()])
})

describe("useGetPokemons", () => {
  it("Render", async () => {
    const [state] = await useGetPokemons()

    await waitFor(() => expect(state).toBeTruthy())
  })
})
