import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllStories, getUserById } from '../../config/api';

const Stories = () => {
  const [data, setData] = React.useState(null);
  // const [user, setUser] = React.useState(null);
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  React.useEffect(() => {
    getAllStories(accessToken).then((r) => {
      setData(r.data);
    });
    // data?.map((obj) => getUserById(obj?.user).then((r) => setUser({ ...r.data })));
  }, [data]);

  // console.log(data);

  return (
    <div className="stories">
      {data?.length >= 1 &&
        data?.map((obj) => (
          <div onClick={() => navigate(`/stories/${obj.id}`)} key={obj.id} className="stories_card">
            <img
              src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
              alt=""
            />
            <span>user</span>
          </div>
        ))}
    </div>
  );
};

export default Stories;
