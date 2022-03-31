import Link from 'next/link'

import {
  ItemStyle,
  LinkStyle,
  ListStyle
} from './styles'

export const Links: React.FC = () => (
  <ListStyle>
    <ItemStyle>
      <Link href="/about" passHref>
        <LinkStyle>About</LinkStyle>
      </Link>
    </ItemStyle>
    <ItemStyle>
      <Link href="/favorites" passHref>
        <LinkStyle>Favorites</LinkStyle>
      </Link>
    </ItemStyle>
  </ListStyle>
)
