import React from 'react'
import { useNavigate } from 'react-router-dom';

const PostsImage = ({ params }) => {
  const navigate = useNavigate()

  // console.log(params);

  return (
    <div className='post_images' onClick={() => navigate(`/posts/${params.id}`)}>
      <img src={params.post_images?.length >= 1 ? params.post_images[0]?.image : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"} alt="" />
    </div>
  )
}

export default PostsImage