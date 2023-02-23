import React from 'react'
import { AuthPages } from '../Layout/Lazy';
import { Routes, Route, Navigate } from 'react-router-dom';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<AuthPages.Login />} />
      <Route path="/auth/register" element={<AuthPages.Register />} />
      <Route path="*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  )
}

export default AuthRoutes