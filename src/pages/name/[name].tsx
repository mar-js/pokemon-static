import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths
} from 'next'

import { IGetProps,  IPagePokemon } from '@assets/interfaces'

import {
  Seo,
  GET_POKEMON,
  GET_VALUE_PARAMS
} from '@assets/helpers'
import { Section } from '@ui/layouts'
import { DetailsPokemon } from '@ui/components'

const PokemonName: NextPage<IPagePokemon> = ({ data: { id, name, sprites}, error }) => (
  <>
    <Seo
      title={ name }
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
        id={ id }
        img={ sprites.other?.dream_world.front_default || '/no-image.png' }
        name={ name }
        sprites={{
          front_default: sprites.front_default,
          front_shiny: sprites.front_shiny,
          back_default: sprites.back_default,
          back_shiny: sprites.back_shiny
        }}
      />
    </Section>
  </>
)

export const getStaticPaths: GetStaticPaths = async (ctx): Promise<any> => {
  try {
    const NAMES = await GET_VALUE_PARAMS('name')

    if (!NAMES) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    return {
      paths: [ ...NAMES ],
      fallback: 'blocking'
    }
  } catch (error: IGetProps | any) {
    const ERROR: string = error.message

    console.log('ERROR IN getStaticPaths FROM pages/name/[name].tsx: ', ERROR)

    return {
      props: {
        error: ERROR
      }
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<any> => {
  try {
    const { name } = params as { name: string }

    return {
      props: {
        data: await GET_POKEMON(name)
      },
      revalidate: 86400
    }
  } catch (error: IGetProps | any) {
    const ERROR: string = error.message

    console.log('ERROR IN getStaticProps FROM pages/name/[name ].tsx: ', ERROR)

    return {
      props: {
        error: ERROR
      }
    }
  }
}

export default PokemonName
