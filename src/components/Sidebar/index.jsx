import React from 'react';
import {
  AiFillHeart,
  AiFillHome,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePlusSquare,
} from 'react-icons/ai';
import { BsInstagram, BsSearch } from 'react-icons/bs';
import { MdExplore, MdOutlineExplore } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Search from '../Search';
import Notif from '../../apps/Layout/Notifications';
import './Sidebar.scss';

const Sidebar = () => {
  const [active, setActive] = React.useState('home');
  const [search, setSearch] = React.useState(false);
  const [notif, setNotif] = React.useState(false);
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);
  const navigate = useNavigate();

  const onClickClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 770px)',
  });

  const isTablet = useMediaQuery({
    query: '(max-width: 1265px)',
  });

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="sidebar_container">
      <div className="main">
        {isMobile && (
          <div className="navbar">
            <div
              className="logo"
              onClick={() => {
                navigate('/');
                setActive('home');
              }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                alt="instagram"
              />
            </div>
            <div className="searchBlock">
              <div className="search">
                <BsSearch />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setValue(e.target.value)}
                  ref={inputRef}
                  value={value}
                />
                {value && (
                  <svg
                    onClick={onClickClear}
                    className="clearIcon"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                  </svg>
                )}
              </div>
              <div
                onClick={() => setActive('notif')}
                className={active === 'notif' ? 'div active' : 'div'}>
                {active === 'notif' ? <AiFillHeart /> : <AiOutlineHeart />}
              </div>
            </div>
          </div>
        )}
        <div className={search || notif ? 'sidebar new' : 'sidebar'}>
          {!isMobile && (
            <div
              className="logo"
              onClick={() => {
                navigate('/');
                setActive('home');
              }}>
              {isTablet || search || notif ? (
                <BsInstagram />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                  alt="instagram"
                />
              )}
            </div>
          )}
          <div className="menus">
            <div
              onClick={() => {
                setSearch(false);
                setNotif(false);
                setActive('home');
                navigate('/');
              }}
              className={active === 'home' ? 'div active' : 'div'}>
              {active === 'home' ? <AiFillHome /> : <AiOutlineHome />}
              {!isTablet && !search && !notif && <span>Home</span>}
            </div>
            {!isMobile && (
              <div
                onClick={() => {
                  setActive('search');
                  setNotif(false);
                  setSearch(true);
                }}
                className={active === 'search' ? 'div active' : 'div'}>
                {active === 'search' ? <FaSearch /> : <BsSearch />}
                {!isTablet && !search && !notif && <span>Search</span>}
              </div>
            )}
            <div
              onClick={() => {
                setActive('explore');
                setSearch(false);
                setNotif(false);
                navigate('/posts');
              }}
              className={active === 'explore' ? 'div active' : 'div'}>
              {active === 'explore' ? <MdExplore /> : <MdOutlineExplore />}
              {!isTablet && !search && !notif && <span>Explore</span>}
            </div>
            {!isMobile && (
              <div
                onClick={() => {
                  setActive('notif');
                  setNotif(true);
                  setSearch(false);
                }}
                className={active === 'notif' ? 'div active' : 'div'}>
                {active === 'notif' ? <AiFillHeart /> : <AiOutlineHeart />}
                {!isTablet && !search && !notif && <span>Notifications</span>}
              </div>
            )}
            <div
              onClick={() => {
                setActive('create');
                setNotif(false);
                setSearch(false);
                navigate('/create');
              }}
              className={active === 'create' ? 'div active' : 'div'}>
              {active === 'create' ? <AiOutlinePlusSquare /> : <AiOutlinePlusSquare />}
              {!isTablet && !search && !notif && <span>Create</span>}
            </div>
            <div
              onClick={() => {
                setActive('profile');
                setSearch(false);
                setNotif(false);
                navigate('/profile');
              }}
              className={active === 'profile' ? 'div active' : 'div'}>
              <img
                src={
                  JSON.parse(localStorage.getItem('user'))?.avatarka
                    ? URL.createObjectURL(JSON.parse(localStorage.getItem('user')).avatarka[0])
                    : 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
                }
                alt=""
              />
              {!isTablet && !search && !notif && <span>Profile</span>}
            </div>
          </div>
          {!isMobile && (
            <div className="logOut" onClick={logOut}>
              {isTablet || search ? <BiLogOut /> : 'Log out'}
            </div>
          )}
        </div>
      </div>
      {search && !isMobile && <Search />}
      {notif && !isMobile && <Notif />}
    </div>
  );
};

export default Sidebar;
