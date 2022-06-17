import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import {
  GENERATOR_ID,
  GET_FAVORITES,
  Seo
} from '@assets/helpers'
import { Section } from '@ui/layouts'
import Link from 'next/link'
import {
  CardPokemon,
  Grid,
  NoFavorites
} from '@ui/components'

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(GET_FAVORITES())
  }, [])

  return (
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
        { favorites.length ? (
          <Grid>
            { favorites.map(id => (
              <Link
                key={ GENERATOR_ID(id) }
                href={ `/pokemon/${id}` }
              >
                <a>
                  <CardPokemon
                    img={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` }
                    name={ id.toString() }
                    text={ false }
                  />
                </a>
              </Link>
            )) }
          </Grid>
        ) : (
          <NoFavorites />
        ) }
      </Section>
    </>
  )
}




export default Favorites
