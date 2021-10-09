import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container, Content } from './styles'

interface Props {
  toggleTheme: () => void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        React is amazing! 😆
        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={24}
          width={50}
          handleDiameter={18}
          offColor="#1A335B"
          onColor="#67D7AF"
          activeBoxShadow="none"
        />
      </Content>
    </Container>
  )
}

export default Header
