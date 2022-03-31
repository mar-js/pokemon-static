import styled from 'styled-components'

export const ListStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemStyle = styled.li`
  margin: 0 0 0 1.5rem;
`

export const LinkStyle = styled.a`
  color: var(--violet-primary);

  &:hover {
    color: var(--white);
  }
`
