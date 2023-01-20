import React from 'react'
import { getAllPosts } from '../../config/api'
import PostsCard from '../PostsCard'

const Posts = () => {
  const accessToken = localStorage.getItem('accessToken')
  
  getAllPosts(accessToken)
  .then(r => console.log(r.data))

  return (
    <div className='posts'>
      <PostsCard />
    </div>
  )
}

export default Posts