import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import MUIForm from '../components/LoginForm/MUIForm'
import PageNotFound from '../pages/PageNotFound'

const AppRoutes = (props) => {
  return (
    <Routes>
        <Route index element ={<HomePage {...props}/>}/>
        <Route path='/signup' element={<SignUp {...props}/>}/>
        <Route path='/login' element={<MUIForm/>}/>
        <Route path='/*' element={<PageNotFound {...props}/>}/>
        <Route path='/dash' element ={<Dashboard {...props}/>}/>
    </Routes>
  )
}

export default AppRoutes
