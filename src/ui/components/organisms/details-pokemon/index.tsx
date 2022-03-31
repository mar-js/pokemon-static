import { IDetailsPokemon } from '@assets/interfaces'

import { CardPokemon, InfoPokemon } from '@ui/components'

import { DetailsPokemonStyle } from './styles'

export const DetailsPokemon: React.FC<IDetailsPokemon> = ({ img, id, name, sprites }) => (
  <DetailsPokemonStyle>
    <CardPokemon
      img={ img }
      text={ false }
    />
    <InfoPokemon
      id={ id }
      name={ name }
      sprites={ sprites }
    />
  </DetailsPokemonStyle>
)
