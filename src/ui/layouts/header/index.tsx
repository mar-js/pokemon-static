import { Navbar, Title } from '@ui/components'

import { HeaderStyle } from './styles'

export const Header: React.FC = () => (
  <HeaderStyle>
    <Title />
    <Navbar />
  </HeaderStyle>
)
