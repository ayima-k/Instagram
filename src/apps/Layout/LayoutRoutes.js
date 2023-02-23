import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LayoutPages } from './Lazy';
import { NotifPage, PostCardsForExplore, Search, Sidebar, StoriesCard, UsersCard } from '../../components';

const LayoutRoutes = () => {
  return (
    <div className="main_container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<LayoutPages.Main />} />
        <Route path="/posts" element={<LayoutPages.Posts />} />
        <Route path="/create" element={<LayoutPages.Create />} />
        <Route path="/profile" element={<LayoutPages.Profile />} />
        <Route path="/profile/edit" element={<LayoutPages.Edit />} />
        <Route path="/posts/:id" element={<PostCardsForExplore />} />
        <Route path="/search" element={<Search />} />
        <Route path='/notifications' element={<NotifPage/>} />
        <Route path="/users/:id" element={<UsersCard />} />
        <Route path="/stories/:id" element={<StoriesCard />} />
        <Route path="*" element={<LayoutPages.Main />} />
      </Routes>
    </div>
  )
}

export default LayoutRoutes