import React from 'react';
import PostsCard from '../PostsCard';
import { getAllPosts } from '../../../config/api';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [data, setData] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    getAllPosts(accessToken).then((r) => setData(r.data));
  }, [data]);

  return (
    <div className="posts">
      {data?.map((item) => (
        <PostsCard obj={item} key={item.id} />
      ))}
    </div>
  );
};

export default Posts;
