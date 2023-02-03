import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFollowers } from '../../config/api';
import './Subscribers.scss';

const Subscribers = () => {
  const [data, setData] = React.useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    getFollowers(id).then((r) => setData(r.data));
    // data?.map(obj => getUserById(obj?.to_user).then(r => {
    //   console.log(r.data);
    // }))
  }, [data]);

  return (
    <div className="subscribers">
      {data?.length >= 1 &&
        data?.map((obj) => (
          <div
            key={obj?.id}
            onClick={() =>
              navigate(`/users/${obj?.to_user === id ? obj?.from_user : obj?.from_user}`)
            }>
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

export default Subscribers;
