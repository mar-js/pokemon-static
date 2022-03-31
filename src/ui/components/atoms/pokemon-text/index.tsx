import { IPokemonText } from '@assets/interfaces'

import {
  IdStyle,
  NameStyle,
  PokemonTextStyle
} from './styles'

export const PokemonText: React.FC<IPokemonText> = ({ id, name }) => (
  <PokemonTextStyle>
    <IdStyle>#{ id }</IdStyle>
    <NameStyle>{ name }</NameStyle>
  </PokemonTextStyle>
)
