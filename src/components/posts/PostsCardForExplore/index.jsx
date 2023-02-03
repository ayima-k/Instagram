import React from 'react';
import { AiFillHeart, AiOutlineHeart, AiTwotoneEdit } from 'react-icons/ai';
import { FiMessageCircle, FiSend } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { BsBookmarkFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteLike,
  deletePost,
  deleteSave,
  editPost,
  getComments,
  getSinglePost,
  getUserById,
  postComments,
  postLike,
  savePost,
} from '../../../config/api';
import './PostCardsForExplore.scss';
import { MdDone } from 'react-icons/md';

const PostCardsForExplore = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const current_user = JSON.parse(localStorage.getItem('user'));
  const [data, setData] = React.useState(null);
  const [isLiked, setIsLiked] = React.useState(false);
  const [commentsData, setCommentsData] = React.useState(null);
  const [comments, setComments] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [comValue, setComValue] = React.useState('');
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    getSinglePost(id, accessToken).then((r) => setData(r.data));
  }, [data]);

  const handleLike = (id) => {
    postLike({ post: id }, accessToken);
  };

  const handleDeleteLike = (id) => {
    deleteLike(id, accessToken);
  };

  const getComment = (id) => {
    getComments(id, accessToken).then((r) => setCommentsData(r.data));
  };

  const postComment = (id) => {
    postComments({ body: comValue, post: id, parent: id }, accessToken);
  };

  const handleSave = (id) => {
    savePost({ post: id }, accessToken);
  };

  const handleDeleteSave = (id) => {
    deleteSave(id, accessToken);
  };

  const handleDeletePost = (id) => {
    deletePost(id, accessToken).then((r) => console.log(r.data));
  };

  const handleEditPost = (id) => {
    editPost(id, { title: input }, accessToken).then((r) => console.log(r.data));
  };

  return (
    <div className="postCardsForExplore">
      <div className="post_card">
        <div className="post_card-header">
          <div>
            <img
              onClick={() => navigate(current_user.id !== data?.user && `/users/${data?.user}`)}
              src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
              alt=""
            />
            <h3 onClick={() => navigate(current_user.id !== data?.user && `/users/${data?.user}`)}>
              user
            </h3>
          </div>
          <div>
            {current_user?.id === data?.user && (
              <RiDeleteBin5Fill
                onClick={() => {
                  handleDeletePost(data?.id);
                  navigate('/profile');
                }}
                className="del_icon"
              />
            )}
            {current_user?.id === data?.user && !isEdit ? (
              <AiTwotoneEdit onClick={() => setIsEdit(true)} className="edit_icon" />
            ) : (
              <MdDone
                onClick={() => {
                  setIsEdit(false);
                  handleEditPost(data?.id);
                }}
              />
            )}
          </div>
        </div>
        <div className="post_card-body">
          <img
            src={
              data?.post_images?.length >= 1
                ? data?.post_images[0]?.image
                : 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
            }
            alt=""
          />
        </div>
        <div className="post_card-footer">
          <div className="likes_block">
            <div className="likes">
              {isLiked ? (
                <AiFillHeart
                  onClick={() => {
                    handleDeleteLike(data?.id);
                    setIsLiked(!isLiked);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => {
                    handleLike(data?.id);
                    setIsLiked(!isLiked);
                  }}
                />
              )}
              <FiMessageCircle
                onClick={() => {
                  setComments(!comments);
                  getComment(data?.id);
                }}
              />
              <FiSend />
            </div>
            <div>
              {isSaved ? (
                <div
                  onClick={() => {
                    handleDeleteSave(data?.id);
                    setIsSaved(!isSaved);
                  }}>
                  <BsBookmarkFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    handleSave(data?.id);
                    setIsSaved(!isSaved);
                  }}>
                  <svg
                    aria-label="Save"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24">
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"></polygon>
                  </svg>
                </div>
              )}
            </div>
          </div>
          {comments && commentsData?.length >= 1 && <div className="comments_drop">comments</div>}
          <div className="about_block">
            <div className="count_of_likes">
              <span>{data?.liked?.length} likes</span>
            </div>
            <div>
              <p>
                <span onClick={() => navigate(`/users/${data?.user}`)}>user</span>
                {!isEdit ? (
                  data?.title
                ) : (
                  <input type="text" value={input} onInput={(e) => setInput(e.target.value)} />
                )}
                <span>... more</span>
              </p>
            </div>
          </div>
          <div className="comment_block">
            <input
              onInput={(e) => setComValue(e.target.value)}
              value={comValue}
              type="text"
              placeholder="Add a comment..."
            />
            <button disabled={comValue.length === 0} onClick={() => postComment(data?.id)}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardsForExplore;
