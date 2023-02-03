import React from 'react';
import { createPost, createStory } from '../../../config/api';
import './Create.scss';

const Create = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [filePost, setFilePost] = React.useState(null);
  const [fileStory, setFileStory] = React.useState(null);
  const [value, setValue] = React.useState('');

  const handleCreatePost = () => {
    const formData = new FormData();
    formData.append('file', filePost);
    createPost({ title: value, formData }, accessToken).then((r) => console.log(r.data));
  };

  const handleCreateStory = () => {
    const formData = new FormData();
    formData.append('file', fileStory);
    createStory(formData, accessToken);
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
