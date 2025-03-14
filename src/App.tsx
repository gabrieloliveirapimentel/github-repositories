import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Header } from './components/Header'
import { Home } from "./pages/Home"
import { ProfileProvider } from './context/ProfileContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ProfileProvider>
        <Header />
        <Home />
      </ProfileProvider>
    </ThemeProvider>
  )
}