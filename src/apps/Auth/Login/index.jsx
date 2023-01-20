import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { getToken, getUser } from '../../../config/api';
import Footer from '../../../components/Footer';
import Image from '../../../assets/insta.PNG'
import './Login.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onBlur',
  });
  
  const isTablet = useMediaQuery({
    query: "(min-width: 880px)"
  })

  const navigate = useNavigate()
  const [passValue, setPassValue] = React.useState('')

  const onSubmit = (data) => {
    getUser()
    .then(r => {
      localStorage.setItem('user', JSON.stringify(r.data.find(obj => obj.username === data.username)))
      getToken({username: data.username, password: data.password})
      .then(r => {
        if (r) {
          localStorage.setItem('accessToken', r.data.access)
          localStorage.setItem('refreshToken', r.data.refresh)
          navigate('/')
        }
      })
    })
    .catch(e => window.alert(e))
  }

  return (
    <>
      <div className='login'>
        {
          isTablet && <div className='image_container'>
            <img className='main_login_image' src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20220906105834056786ed0c62d4912242222121.jpg" alt="" />
          </div>
        }
        <div className='login_container'>
          <div className="container">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt="instagram" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="username"
                  placeholder="Phone number, username, or email"
                  {...register('username', {
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
              <div className="btn">
                <button disabled={!isValid || passValue.length <= 8} type="submit" className="btn_primary">
                  Log in
                </button>
              </div>
            </form>

            <div className='or'>
              <div className='hr'></div>
              <span>OR</span>
              <div className='hr'></div>
            </div>

            <div className='facebook'>
              <span onClick={() => window.location.href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221usk6c71hdkyzpiy5vbp1f2055h1bn7ym6zbng3z978s9tmawm8%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D1695b474-0837-4426-b227-1f5cc1d33ea6%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221usk6c71hdkyzpiy5vbp1f2055h1bn7ym6zbng3z978s9tmawm8%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0'}><AiFillFacebook/> Log in with Facebook</span>
            </div>

            <div className='forgot_pass'>
              <span onClick={() => window.location.href='https://www.instagram.com/accounts/password/reset/'}>Forgot password?</span>
            </div>
          </div>
          <div className="block">
            <h3>Don't have an account? <span onClick={() => navigate('/auth/register')}>Sign up</span></h3>
          </div>
          <div className='login_footer'>
            <div className='getTheApp'>
              <span>Get the app.</span>
            </div>
            <div>
              <img onClick={() => window.location.href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D8CB32E45-78BF-4302-BD10-B3E2AD69FC6D%26utm_content%3Dlo%26utm_medium%3Dbadge'} src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
              <img onClick={() => window.location.href='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1229%2C655'} src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login