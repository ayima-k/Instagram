import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineTable } from 'react-icons/ai';
import { BsFillBookmarkFill, BsThreeDots } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { getPostsOfUser, getUserById, postFollow, unFollow } from '../../config/api';
import PostsImage from '../posts/PostsImage';
import Footer from '../Footer';
import '../../apps/Layout/Profile/Profile.scss';

const UsersCard = () => {
  const [data, setData] = React.useState(null);
  const { id } = useParams();
  const [active, setActive] = React.useState('posts');
  const [posts, setPosts] = React.useState(null);
  const [follow, setFollow] = React.useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: '(max-width: 450px)',
  });

  React.useEffect(() => {
    getUserById(id).then((r) => setData(r.data));
    getPostsOfUser(id).then((r) => setPosts(r.data));
  }, [follow, data]);

  const handleFollow = () => {
    postFollow(
      {
        to_user: Number(id),
      },
      accessToken,
    ).then((r) => {
      if (r) {
        setFollow(true);
      }
    });
  };

  const handleDelete = () => {
    unFollow(Number(id), accessToken).then((r) => {
      setFollow(false);
    });
  };

  return (
    <div className="profile">
      <div className="profile_header">
        <div className="profile_header_image">
          <img
            src={
              data?.avatarka
                ? ''
                : 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
            }
            alt=""
          />
        </div>
        <div className="profile_header_text">
          <div className="profile_first">
            <h2>{data?.username}</h2>
            {!isMobile && id !== data?.id && (
              <button
                className={!follow ? 'follow' : 'follow ed'}
                onClick={() => (!follow ? handleFollow() : handleDelete())}>
                {follow ? 'Following' : 'Follow'}
              </button>
            )}
            <BsThreeDots />
          </div>
          {isMobile && id !== data && data?.id && (
            <button
              className={!follow ? 'follow' : 'follow ed'}
              onClick={() => (!follow ? handleFollow() : handleDelete())}>
              {follow ? 'Following' : 'Follow'}
            </button>
          )}
          {!isMobile && (
            <>
              <div className="profile_second">
                <span>
                  <p>{posts?.length}</p> posts
                </span>
                <span
                  onClick={() =>
                    data?.subscribers !== 0 && navigate(`/users/${data.id}/subscribers`)
                  }>
                  <p>{data?.subscribers}</p> followers
                </span>
                <span
                  onClick={() =>
                    data?.subscriptions !== 0 && navigate(`/users/${data.id}/subscriptions`)
                  }>
                  <p>{data?.subscriptions}</p> following
                </span>
              </div>
              <div className="profile_third">
                <span>
                  {data?.first_name} {data?.last_name}
                </span>
                <span>{data?.bio}</span>
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
            <span onClick={() => navigate('/profile/subscribers')}>
              <p>{data?.subscribers}</p> followers
            </span>
            <span onClick={() => navigate('/profile/subscriptions')}>
              <p>{data?.subscriptions}</p> following
            </span>
          </div>
          <div className="profile_third">
            <span>
              {data?.first_name} {data?.last_name}
            </span>
            <span>{data?.bio}</span>
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
        </div>
        {posts?.length == 0 ? (
          <div className="profile_body_body">
            <MdOutlineAddAPhoto />
            <h1>No Posts Yet</h1>
          </div>
        ) : (
          <div className="profile_body_posts">
            {posts?.map((item) => (
              <PostsImage key={item.id} params={item} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UsersCard;
