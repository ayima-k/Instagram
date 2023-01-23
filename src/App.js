import React from 'react';
import axios from 'axios';
import Login from './apps/Auth/Login';
import Register from './apps/Auth/Register';
import Create from './apps/Layout/Create';
import Edit from './apps/Layout/Edit';
import Posts from './apps/Layout/Posts';
import Profile from './apps/Layout/Profile';
import Main from './apps/Layout/Main';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Subscribers from './components/Subscribers';
import Subscriptions from './components/Subscriptions';
import UsersCard from './components/UsersCard';
import StoriesCard from './components/StoriesMore';
import PostCardsForExplore from './components/posts/PostsCardForExplore';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://cryxxxen.pythonanywhere.com/';

function App() {
  const users = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  React.useEffect(() => {
    users && navigate('/');
  }, [users]);

  return users ? (
    <div className="main_container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostCardsForExplore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/users/:id" element={<UsersCard />} />
        <Route path="/stories/:id" element={<StoriesCard />} />
        <Route path="/users/:id/subscribers" element={<Subscribers />} />
        <Route path="/users/:id/subscriptions" element={<Subscriptions />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  ) : (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  );
}

export default App;
