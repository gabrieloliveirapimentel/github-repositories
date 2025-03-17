import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Route, Routes } from 'react-router'

import { ProfileProvider } from './context/ProfileContext'
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './routes'

import { Home } from "./pages/Home"
import { Login } from './pages/Login'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <ProfileProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            </Routes>
        </ProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}