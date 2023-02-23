import React from "react";
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Main from './Main'
import Create from './Create'
import Edit from './Edit'
import Posts from './Posts'
import Profile from './Profile'

// const Login = React.lazy(() => import('../Auth/Login'))
// const Register = React.lazy(() => import('../Auth/Register'))

export const AuthPages = {
  Login,
  Register
}

// const Main = React.lazy(() => import("./Main"));
// const Create = React.lazy(() => import("./Create"));
// const Edit = React.lazy(() => import("./Edit"));
// const Posts = React.lazy(() => import("./Posts"));
// const Profile = React.lazy(() => import("./Profile"));

export const LayoutPages = {
  Main,
  Create,
  Edit,
  Posts,
  Profile
};


