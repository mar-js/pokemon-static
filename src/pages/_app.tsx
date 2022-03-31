import { AppProps } from 'next/app'

import { GlobalStyles } from '@assets/styles'
import { Header } from '@ui/layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
