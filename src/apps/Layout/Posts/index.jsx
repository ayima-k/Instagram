import React from 'react'
import PostsImage from '../../../components/PostsImage'
import { getAllPosts } from '../../../config/api'
import './Posts.scss'


const Posts = () => {
  const [data, setData] = React.useState(null)
  const accessToken = localStorage.getItem('accessToken')
  
  React.useEffect(() => {
    getAllPosts(accessToken)
    .then(r => setData(r.data))
  }, [data])

  return (
    <div className='posts_container'>
      {
        data?.length >=1 && data?.map(obj => <PostsImage key={obj?.id} params={obj}/>)
      }
    </div>
  )
}

export default Posts