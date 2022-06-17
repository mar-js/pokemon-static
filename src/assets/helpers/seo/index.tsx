import { ISeo } from '@assets/interfaces'

import Head from 'next/head'

import { KEYWORDS } from '../keywords'
import { DOMAIN } from '../domain'

export const Seo: React.FC<ISeo> = ({ title, description, keywords }) =>  (
  <Head>
    <title>{ title } | Pokemon Static</title>
    <meta name="description" content={ description } />
    <meta name="keywords" content={ KEYWORDS(keywords) } />
    <meta property="og:title" content={ `Info of ${title}` } />
    <meta property="og:description" content={ `This page is about ${title}` } />
    <meta property="og:image" content={`${DOMAIN}/img/banner.png`}  />
  </Head>
)
