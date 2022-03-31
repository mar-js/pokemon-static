import { IInfoPokemon } from '@assets/interfaces'

import {
  Heart,
  PokemonName,
  PokemonImages
} from '@ui/components'

import { FlexStyle, InfoPokemonStyle } from './styles'

export const InfoPokemon: React.FC<IInfoPokemon> = ({ name, id, sprites }) => (
  <InfoPokemonStyle>
    <FlexStyle>
      <PokemonName name={ name } />
      <Heart id={ id } />
    </FlexStyle>
    <PokemonImages { ...sprites } />
  </InfoPokemonStyle>
)
