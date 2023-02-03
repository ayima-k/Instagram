import React from 'react';
import PostsCard from '../PostsCard';
import { getAllPosts, getFollowings } from '../../../config/api';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const accessToken = localStorage.getItem('accessToken');
  const user = JSON.parse(localStorage.getItem('user'));
  const [data, setData] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    getAllPosts(accessToken).then((r) => {
      // for (let i = 0; i < r.data?.length; i++) {
      //   let cache = r.data[i]
      //   getFollowings(user?.id).then(r => {
      //     const data = r.data
      //     for (let j = 0; j < data.length; j++) {
      //       if (cache === data[j]) {
      //         console.log(cache);
      //       }
      //     }
      //   })
      // }
      setData(r.data);
    });
  }, [data]);

  // console.log(data);

  return (
    <div className="posts">
      {data?.map((item) => (
        <PostsCard obj={item} key={item.id} />
      ))}
    </div>
  );
};

export default Posts;
