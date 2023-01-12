import React from 'react'
import { useNavigate } from 'react-router-dom'
import Posts from '../../../components/Posts'
import Stories from '../../../components/Stories'
import './Main.scss'

const Main = () => {
  const navigate = useNavigate()

  return (
    <div className='main_block'>
      <div className='stories_posts'>
        <Stories/>
        <Posts/>
      </div>
      <div className='prof'>
        <div>
          <img onClick={() => navigate('/profile')} src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />
        </div>
        <div className='mt'>
          <div className="login_block" onClick={() => navigate('/profile')}>
            <h3>ayima__k</h3>
          </div>
          <div className="name_block">
            <span>| Ayima Kochkorova |</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main