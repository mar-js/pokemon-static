import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths
} from 'next'

import {
  IGetProps,
  IGetPokemons,
  IPagePokemon,
  IGetPathsProps,
  IPokemon
} from '@assets/interfaces'

import { Seo } from '@assets/helpers'
import { Section } from '@ui/layouts'
import { DetailsPokemon } from '@ui/components'

const Pokemon: NextPage<IPagePokemon> = ({ data, error }) => (
  <>
    <Seo
      title={ data.name }
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
      <DetailsPokemon
        id={data.id}
        img={ data.sprites.other?.dream_world.front_default || '/no-image.png' }
        name={ data.name }
        sprites={{
          front_default: data.sprites.front_default,
          front_shiny: data.sprites.front_shiny,
          back_default: data.sprites.back_default,
          back_shiny: data.sprites.back_shiny
        }}
      />
    </Section>
  </>
)

export const getStaticPaths: GetStaticPaths = async (ctx): Promise<any> => {
  try {
    const RESPONSE = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const DATA: IGetPokemons = await RESPONSE.json()
    const IDS: IGetPathsProps[] = DATA.results.map((pokemon, index) => ({
      params: {
        id: `${index + 1}`,
      }
    }))

    return {
      paths: [ ...IDS ],
      fallback: false
    }
  } catch (error: IGetProps | any) {
    const ERROR: string = error.message

    console.log('ERROR IN getStaticPaths FROM pages/pokemon/[id].tsx: ', ERROR)

    return {
      props: {
        error: ERROR
      }
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<any> => {
  try {
    const { id } = params as { id: string }
    const RESPONSE = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const DATA: IPokemon = await RESPONSE.json()

    return {
      props: {
        data: DATA
      }
    }
  } catch (error: IGetProps | any) {
    const ERROR: string = error.message

    console.log('ERROR IN getStaticProps FROM pages/pokemon/[id].tsx: ', ERROR)

    return {
      props: {
        error: ERROR
      }
    }
  }
}

export default Pokemon
