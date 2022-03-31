import { ISeo } from '@assets/interfaces'

import Head from 'next/head'

import { KEYWORDS } from '../keywords'

export const Seo: React.FC<ISeo> = ({ title, description, keywords }) =>  (
  <Head>
    <title>{ title } | Pokemon Static</title>
    <meta name='description' content={ description } />
    <meta name='keywords' content={ KEYWORDS(keywords) } />
  </Head>
)
