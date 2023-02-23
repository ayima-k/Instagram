import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LayoutRoutes from './apps/Layout/LayoutRoutes';
import AuthRoutes from './apps/Auth/AuthRoutes';

axios.defaults.baseURL = 'https://cryxxxen.pythonanywhere.com/';

function App() {
  const user = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  React.useEffect(() => {
    user && navigate('/');
  }, [user]);

  return user ? <LayoutRoutes/> : <AuthRoutes/>
}

export default App;
