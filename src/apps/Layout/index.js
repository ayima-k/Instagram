import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Create from './Create'
import Main from './Main'
import Posts from './Posts'
import Profile from './Profile'
import Search from '../../components/Search'
import './Layout.scss'

const LayoutPages = () => {
  const users = false
  const navigate = useNavigate()

  React.useEffect(() => {
    users && navigate('/')
  }, [users])

  return (
    <div className='main_container'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default LayoutPages