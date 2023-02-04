import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost, createPostImages, createStory } from '../../../config/api';
import './Create.scss';

const Create = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [filePost, setFilePost] = React.useState(null);
  const [fileStory, setFileStory] = React.useState(null);
  const [value, setValue] = React.useState('');
  const navigate = useNavigate()

  const handleCreatePost = () => {
    createPost({ title: value }, accessToken)
    .then((r) => {
      const formData = new FormData()
      formData.append('post', r.data.id)
      formData.append('image', filePost)
      setTimeout(() => {
        createPostImages(formData, accessToken)
      }, 1000)
    })
    .finally(() => navigate('/'));
  };

  const handleCreateStory = () => {
    const formData = new FormData();
    formData.append('file', fileStory);
    createStory(formData, accessToken)
    .finally(() => navigate('/'));
  };

  return (
    <div className="create">
      <img
        src={
          !filePost && !fileStory
            ? 'https://emresolutions.com/assets/imgs/no-image.jpg'
            : !fileStory
            ? URL.createObjectURL(filePost)
            : URL.createObjectURL(fileStory)
        }
        alt=""
      />
      <div className="d_flex_for_posts">
        <div className="create_post">
          <label htmlFor="filePost">Choose photos for posts</label>
          <input
            type="file"
            name="filePost"
            id="filePost"
            onInput={(e) => {
              setFilePost(e.target.files[0]);
            }}
          />
          {filePost && (
            <>
              <textarea
                value={value}
                onInput={(e) => setValue(e.target.value)}
                placeholder="Write a description"></textarea>
              <button disabled={value.length <= 1} onClick={handleCreatePost}>
                Share
              </button>
            </>
          )}
        </div>
        <div className="create_story">
          <label htmlFor="fileStory">Choose photos for story</label>
          <input
            type="file"
            name="fileStory"
            id="fileStory"
            onInput={(e) => setFileStory(e.target.files[0])}
          />
          {fileStory && (
            <>
              <button onClick={handleCreateStory}>Post</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;
