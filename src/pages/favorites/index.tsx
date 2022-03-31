import type { GetStaticProps, NextPage } from 'next'

import {
  IGetProps,
  IPageFavorites,
  IGetPokemons,
  IGetPokemon
} from '@assets/interfaces'

import { Seo } from '@assets/helpers'
import { Section } from '@ui/layouts'
import Link from 'next/link'
import { CardPokemon } from '@ui/components'

const Favorites: NextPage<IPageFavorites> = ({ data, error }) => (
  <>
    <Seo
      title='Favorites'
      description='Begin app web'
      keywords={[
        'html',
        'css',
        'typescript',
        'nextjs',
        'nextui'
      ]}
    />
    <Section>
      <p>aaaaaaaa</p>
    </Section>
  </>
)

export default Favorites
