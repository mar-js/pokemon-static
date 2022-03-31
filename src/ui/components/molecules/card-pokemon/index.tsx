import { ICardPokemon } from '@assets/interfaces'

import Image from 'next/image'
import { PokemonText } from '@ui/components'

import { CardPokemonStyle, ContainerImageStyle } from './styles'

export const CardPokemon: React.FC<ICardPokemon> = ({ img, id, name, text = true }) => (
  <CardPokemonStyle>
    <ContainerImageStyle>
      <Image
        src={ img }
        alt={ name }
        width={ 200 }
        height={ 200 }
      />
    </ContainerImageStyle>
    { text && (
      <PokemonText
        id={ id }
        name={ name }
      />
    ) }
  </CardPokemonStyle>
)
