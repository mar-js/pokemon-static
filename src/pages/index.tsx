import type { GetStaticProps, NextPage } from 'next'

import {
  IGetProps,
  IPageHome,
  IGetPokemons,
  IGetPokemon
} from '@assets/interfaces'

import { Seo } from '@assets/helpers'
import { Main } from '@ui/layouts'
import Link from 'next/link'
import { CardPokemon } from '@ui/components'

const Home: NextPage<IPageHome> = ({ data, error }) => (
  <>
    <Seo
      title='Home'
      description='Begin app web'
      keywords={[
        'html',
        'css',
        'typescript',
        'nextjs',
        'nextui'
      ]}
    />
    <Main>
      {data.map(({ img, id, name }) => (
        <Link
          key={Math.round((Math.random() * 151) + id)}
          href={`/pokemon/${id}`}
        >
          <a>
            <CardPokemon
              img={ img }
              id={ id }
              name={ name }
            />
          </a>
        </Link>
      )) }
    </Main>
  </>
)


export const getStaticProps: GetStaticProps = async (ctx): Promise<any> => {
  try {
    const RESPONSE = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const DATA: IGetPokemons = await RESPONSE.json()
    const POKEMONS: IGetPokemon[] = DATA.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }))

    return {
      props: {
        data: POKEMONS
      }
    }
  } catch (error: IGetProps | any) {
    const ERROR: string = error.message

    console.log('ERROR IN getStaticProps FROM pages/index.tsx: ', ERROR)

    return {
      props: {
        error: ERROR
      }
    }
  }
}

export default Home
