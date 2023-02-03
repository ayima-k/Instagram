import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostsMain from '../../../components/posts/PostsMain';
import Stories from '../../../components/Stories';
import './Main.scss';

const Main = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  return (
    <div className="main_block">
      <div className="stories_posts">
        <Stories />
        <PostsMain />
      </div>
      <div className="prof">
        <div>
          <img
            onClick={() => navigate('/profile')}
            src={
              user?.avatarka
                ? JSON.parse(localStorage.getItem('user'))
                : 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
            }
            alt=""
          />
        </div>
        <div className="mt">
          <div className="login_block" onClick={() => navigate('/profile')}>
            <h3>{user?.username}</h3>
          </div>
          <div className="name_block">
            <span>
              {user?.first_name} {user?.last_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
