import { useState } from 'react'
import './App.css'
import { UserProvider } from './context/UserContext'
import MyThemeProvider from './context/MyThemeContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider } from '@emotion/react'
import { tealTheme } from './components/Themes/tealTheme'

function App() {
  

  return (
    <>
    <UserProvider>
      <ThemeProvider theme={tealTheme}>
        <NavBar/>
        <AppRoutes/>
      </ThemeProvider>
    </UserProvider>
    </>
  )
}

export default App
