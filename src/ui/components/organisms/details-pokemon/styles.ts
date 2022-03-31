import styled from 'styled-components'

export const DetailsPokemonStyle = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1.5rem;
  margin: 0 auto;

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
