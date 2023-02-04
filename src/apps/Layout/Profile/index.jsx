import React from 'react';
import { AiFillHeart, AiOutlineTable } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { getLiked, getPostsOfUser, getSaves, getSinglePost } from '../../../config/api';
import PostsImage from '../../../components/posts/PostsImage';
import './Profile.scss';

const Profile = () => {
  const data = JSON.parse(localStorage.getItem('user'));
  const [posts, setPosts] = React.useState(null);
  const [saved, setSaved] = React.useState(null);
  const [active, setActive] = React.useState('posts');
  const accessToken = localStorage.getItem('accessToken');
  // const [liked, setLiked] = React.useState(null)
  // const likes = []

  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: '(max-width: 450px)',
  });

  React.useEffect(() => {
    getPostsOfUser(data.id).then((r) => setPosts(r.data));

    getSaves(data.id, accessToken).then((r) => setSaved(r.data));

    // getLiked(data.id, accessToken).then(r => {

    //   setLiked(r.data?.map(obj => getSinglePost(obj?.post, accessToken)
    //   .then(r => likes.push(r.data))))
    // })
  }, [posts, saved]);

  return (
    <div className="profile">
      <div className="profile_header">
        <div className="profile_header_image">
          <img
            src={
              data.avatarka
                ? URL.createObjectURL(data.avatarka)
                : 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
            }
            alt=""
          />
        </div>
        <div className="profile_header_text">
          <div className="profile_first">
            <h2>{data.username}</h2>
            {!isMobile && <button onClick={() => navigate('/profile/edit')}>Edit profile</button>}
            <svg
              aria-label="Options"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24">
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="8.635"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"></circle>
              <path
                d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"></path>
            </svg>
          </div>
          {isMobile && <button onClick={() => navigate('/profile/edit')}>Edit profile</button>}
          {!isMobile && (
            <>
              <div className="profile_second">
                <span>
                  <p>{posts?.length}</p> posts
                </span>
                <span
                  onClick={() =>
                    data.subscribers !== 0 && navigate(`/users/${data.id}/subscribers`)
                  }
                >
                  <p>{data.subscribers}</p> followers
                </span>
                <span
                  onClick={() =>
                    data.subscriptions !== 0 && navigate(`/users/${data.id}/subscriptions`)
                  }
                >
                  <p>{data.subscriptions}</p> following
                </span>
              </div>
              <div className="profile_third">
                <span>
                  {data.first_name} {data.last_name}
                </span>
                <span>{data.bio}</span>
              </div>
            </>
          )}
        </div>
      </div>
      {isMobile && (
        <>
          <div className="profile_second">
            <span>
              <p>{posts?.length}</p> posts
            </span>
            <span 
              onClick={() =>
                data.subscribers !== 0 && navigate(`/users/${data.id}/subscribers`)
              }
            >
              <p>{data.subscribers}</p> followers
            </span>
            <span
              onClick={() =>
                data.subscriptions !== 0 && navigate(`/users/${data.id}/subscriptions`)
              }
            >
              <p>{data.subscriptions}</p> following
            </span>
          </div>
          <div className="profile_third">
            <span>
              {data.first_name} {data.last_name}
            </span>
            <span>{data.bio}</span>
          </div>
        </>
      )}
      <div className="profile_body">
        <div className="profile_body_header">
          <span
            className={active === 'posts' ? 'span active' : 'span'}
            onClick={() => setActive('posts')}>
            <AiOutlineTable /> POSTS
          </span>
          <span
            className={active === 'saved' ? 'span active' : 'span'}
            onClick={() => setActive('saved')}>
            <BsFillBookmarkFill /> SAVED
          </span>
          <span
            className={active === 'archives' ? 'span active' : 'span'}
            onClick={() => setActive('archives')}>
            <CgProfile /> ARCHIVES
          </span>
          {/* <span
            className={active === 'liked' ? 'span active' : 'span'}
            onClick={() => setActive('liked')}>
            <AiFillHeart /> LIKED
          </span> */}
        </div>
        {posts?.length == 0 && active === 'posts' ? (
          <div className="profile_body_body">
            <MdOutlineAddAPhoto />
            <h1>Share Photos</h1>
            <p>When you share photos, they will appear on your profile.</p>
            <button>Share your first photo</button>
          </div>
        ) : (
          active === 'posts' && (
            <div className="profile_body_posts">
              {posts?.map((item) => (
                <PostsImage key={item.id} params={item} />
              ))}
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
