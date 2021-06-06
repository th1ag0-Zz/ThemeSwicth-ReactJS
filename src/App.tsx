import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components'
import usePersistState from './utils/usePersistState'

import GlobalStyles from './styles/global'
import Header from './components/Header';

import light from './styles/themes/light'
import dark from './styles/themes/dark'
import BoxItem from './components/BoxItem';
import { Author, Content } from './styles/App.style';

function App() {
  const [theme, setTheme] = usePersistState('theme', light)
  const [animated, setAnimated] = useState(true)
  const windowWidth = window.innerWidth;

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)

    setAnimated(false)

    setTimeout(() => {
      setAnimated(true)
    }, 300)

  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />

      <Content>
        <motion.div
          initial={{ scale: 0.85 }}
          // animate={{ scale: 1 }}
          animate={animated ? { scale: 1 } : { scale: .85 }}
          transition={{ duration: 0.5 }}
          style={windowWidth > 600 ? { width: '40%' } : { width: '100%' }}
        >
          <BoxItem width="100" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.85 }}
          animate={animated ? { scale: 1 } : { scale: .85 }}
          transition={{ duration: 0.5 }}
          style={windowWidth > 600 ? { width: '57%' } : { width: '100%' }}
        >
          <BoxItem width="100" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.85 }}
          animate={animated ? { scale: 1 } : { scale: .85 }}
          transition={{ duration: 0.5 }}
          style={windowWidth > 600 ? { width: '57%' } : { width: '100%' }}
        >
          <BoxItem width="100" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.85 }}
          animate={animated ? { scale: 1 } : { scale: .85 }}
          transition={{ duration: 0.5 }}
          style={windowWidth > 600 ? { width: '40%' } : { width: '100%' }}
        >
          <BoxItem width="100" />
        </motion.div>
      </Content>

      <Author>
        Feito por{' '}
        <a href="https://www.linkedin.com/in/thiago-furtado-silva/">
          Thiago Silva
        </a>
      </Author>

    </ThemeProvider>
  );
}

export default App;
