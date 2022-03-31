import { IPokemonName } from '@assets/interfaces'

import { PokemonNameStyle } from './styles'

export const PokemonName: React.FC<IPokemonName> = ({ name }) => (
  <PokemonNameStyle>{ name }</PokemonNameStyle>
)
