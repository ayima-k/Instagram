import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer'
import { putUser } from '../../../config/api';
import './Edit.scss'

const Edit = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const user = JSON.parse(localStorage.getItem('user'))
  const accessToken = localStorage.getItem('accessToken')
  const [passValue, setPassValue] = React.useState('')
  const [repValue, setRepValue] = React.useState('')
  const navigate = useNavigate()

  const onSubmit = (data) => {
    putUser(user.id, data, accessToken)
    .then(r => {
      localStorage.setItem('user', JSON.stringify(r.data))
      navigate('/profile')
    })
  }

  return (
    <div className='edit'>
      <div className="edit_container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form_block'>
            <div>
              <img src={user?.avatarka ? '' : 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'} alt="" />
            </div>
            <div className='dFlex'>
              <h2>{user?.username}</h2>
              <input type='file' placeholder='Change profile photo'/>
            </div>
          </div>
          <div className="form_body">

          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register('email', {
                required: 'Required field!',
              })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="First name"
              {...register('first_name', {
                required: 'Required field!',
              })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              {...register('last_name', {
                required: 'Required field!',
              })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register('username', {
                required: 'Required field!',
              })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              {...register('phone_number', {
                required: 'Required field!',
              })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="About"
              {...register('bio', {
                required: 'Required field!',
              })}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={passValue}
              onInput={(e) => setPassValue(e.target.value)}
              {...register('password', {
                required: 'Required field!',
              })}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password Repeat"
              value={repValue}
              onInput={(e) => setRepValue(e.target.value)}
              {...register('password_repeat', {
                required: 'Required field!',
              })}
            />
          </div>
          <div className="btn">
            <button disabled={!isValid || passValue !== repValue || passValue.length <= 8} type="submit" className="btn_primary">
              Sign up
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Edit