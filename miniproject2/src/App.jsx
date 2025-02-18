import { useState } from 'react'
import './App.css'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'

function App() {
  return (
    <UserProvider>
      <div className='app-container'>
        <Header />  
        <NavBar />  
        <div className='content'>  
          <AppRoutes />
        </div>
      </div>
    </UserProvider>
  )
}

export default App

