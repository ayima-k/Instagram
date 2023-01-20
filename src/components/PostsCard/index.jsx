import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiMessageCircle, FiSend } from 'react-icons/fi'
import { useParams } from 'react-router-dom'

const PostsCard = () => {
  const { id } = useParams()

  return (
    <div className="post_card">
      <div className="post_card-header">
        <img src="https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s1100-c50.jpg" alt="" />
        <h3>edugrant_kg</h3>
      </div>
      <div className="post_card-body">
        <img src="https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg" alt="" />
      </div>
      <div className="post_card-footer">
        <div className="likes_block">
          <div className='likes'>
            <AiOutlineHeart/>
            <FiMessageCircle/>
            <FiSend/>
          </div>
          <div>
            <svg aria-label="Save" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
          </div>
        </div>
        <div className="about_block">
          <div className='count_of_likes'>
            <span>94 likes</span>
          </div>
          <div>
            <p>
              <span>edugrant_kg</span> ​Грант Академии ОБСЕ в Бишкеке на научное исследование для граждан стран Центральной Азии 🇰🇬
              <span>... more</span>
            </p>
          </div>
        </div>
        <div className="comment_block">
          <input type="text" placeholder='Add a comment...' />
          <button disabled={true}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default PostsCard