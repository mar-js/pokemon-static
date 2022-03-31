import Link from 'next/link'

import { SpanStyle, TitleStyle } from './styles'

export const Title: React.FC = () => (
  <Link href="/" passHref>
    <TitleStyle>
      P<SpanStyle>okemon</SpanStyle>
    </TitleStyle>
  </Link>
)
