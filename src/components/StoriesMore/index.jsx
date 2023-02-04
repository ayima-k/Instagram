import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteStory, getAllStories, getUsers } from '../../config/api';
import { VscChromeClose } from 'react-icons/vsc';
import { BiArchiveOut } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import './StoriesMore.scss';

const StoriesCard = () => {
  const [data, setData] = React.useState(null);
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const current_user = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const [users, setUsers] = React.useState(null);
  const user_info = []

  React.useEffect(() => {
    getAllStories(accessToken).then((r) => {
      setData(r.data?.filter((item) => item?.id == Number(id))[0]);
    });
    getUsers()
      .then(r => setUsers(r.data));
    users?.filter(val => {
      return val.id === data?.user ? user_info.push(val) : null
    })
  }, [data, users]);

  console.log(user_info);

  const handleArchive = () => {};

  const handleDeleteStory = (id) => {
    deleteStory(id, accessToken);
  };

  return (
    <div className="stories_more">
      <div className="header_story">
        <div>
          <img
            src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
            alt=""
          />
          <span>user</span>
        </div>
        <div>
          <BiArchiveOut />
          {current_user?.id === data?.user && (
            <RiDeleteBin5Fill
              onClick={() => {
                handleDeleteStory(data?.id);
                navigate('/profile');
              }}
              className="del_icon"
            />
          )}
          <VscChromeClose onClick={() => navigate('/')} />
        </div>
      </div>
      <div className="main_story">
        {data?.file.includes('MP4') ? (
          <video controls>
            {' '}
            <source src={data?.file} type="video/mp4" />{' '}
          </video>
        ) : (
          <img src={data?.file} alt="" />
        )}
      </div>
    </div>
  );
};

export default StoriesCard;
