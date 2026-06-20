import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import Navbar from './components/layout/Navbar'

import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App