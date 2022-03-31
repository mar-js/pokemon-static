import { IPokemonImages } from '@assets/interfaces'

import Image from 'next/image'

import {
  ContainerImagesStyle,
  PokemonImagesStyle,
  TitleStyle
} from './styles'

export const PokemonImages: React.FC<IPokemonImages> = ({ back_default, back_shiny, front_default, front_shiny }) => (
  <PokemonImagesStyle>
    <TitleStyle>Sprites: </TitleStyle>
    <ContainerImagesStyle>
      <Image
        width={120}
        height={120}
        src={front_default}
        alt={front_default}
      />
      <Image
        width={120}
        height={120}
        src={front_shiny}
        alt={front_shiny}
      />
      <Image
        width={120}
        height={120}
        src={back_default}
        alt={back_default}
      />
      <Image
        width={120}
        height={120}
        src={back_shiny}
        alt={back_shiny}
      />
    </ContainerImagesStyle>
  </PokemonImagesStyle>
)
