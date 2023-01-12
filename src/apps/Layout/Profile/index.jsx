import React from 'react'
import { AiOutlineTable } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import Footer from '../../../components/Footer'
import './Profile.scss'

const Profile = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)"
  })

  return (
    <div className='profile'>
      <div className='profile_header'>
        <div className='profile_header_image'>
          <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg" alt="" />
        </div>
        <div className='profile_header_text'>
          <div className='profile_first'>
            <h2>ayima__k</h2>
            {!isMobile && <button>Edit profile</button>}
            <svg aria-label="Options" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </div>
          {isMobile && <button>Edit profile</button>}
          {
            !isMobile && (
              <>
                <div className='profile_second'>
                  <span><p>0</p> posts</span>
                  <span><p>84</p> followers</span>
                  <span><p>53</p> following</span>
                </div>
                <div className='profile_third'>
                  <span>| Ayima Kochkorova |</span>
                  <span>age 13 ={JSON.stringify('>')} developer from Kyrgyzstan</span>
                </div>
              </>
            )
          }
        </div>
      </div>
      {
        isMobile && (
          <>
            <div className='profile_second'>
              <span><p>0</p> posts</span>
              <span><p>84</p> followers</span>
              <span><p>53</p> following</span>
            </div>
            <div className='profile_third'>
              <span>| Ayima Kochkorova |</span>
              <span>age 13 ={JSON.stringify('>')} developer from Kyrgyzstan</span>
            </div>
          </>
        )
      }
      <div className="profile_body">
        <div className="profile_body_header">
          <span className='span active'><AiOutlineTable/> POSTS</span>
          <span className='span'><BsFillBookmarkFill/> SAVED</span>
          <span className='span'><CgProfile/> TAGGED</span>
        </div>
        <div className="profile_body_body">
          <MdOutlineAddAPhoto/>
          <h1>Share Photos</h1>
          <p>When you share photos, they will appear on your profile.</p>
          <button>Share your first photo</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile