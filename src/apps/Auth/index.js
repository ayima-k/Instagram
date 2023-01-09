import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const AuthPages = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='/auth/register' element={<Register/>}/>
      <Route path='*' element={<Navigate to={'/auth/login'}/>}/>
    </Routes>
  )
}

export default AuthPages