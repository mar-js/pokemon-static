import styled from 'styled-components'

export const CardPokemonStyle = styled.div`
  padding: 1rem;
  border-radius: .5rem;
  background-color: var(--black-secondary);

  &:active {
    background-color: var(--gray);
  }
`

export const ContainerImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
