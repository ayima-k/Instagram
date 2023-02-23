import React from 'react';
import { getAllStories, getUsers } from '../../config/api';
import StoriesCard from '../StoriesCard';

const Stories = () => {
  const [data, setData] = React.useState(null);
  const accessToken = localStorage.getItem('accessToken');
  
  React.useEffect(() => {
    getAllStories(accessToken)
      .then((r) => {
        setData(r.data);
      });
    
  }, [data]);

  return (
    <div className="stories">
      {data?.length >= 1 &&
        data?.map((obj, i) => <StoriesCard key={i} userId={obj.user} storiesId={obj.id} />)}
    </div>
  );
};

export default Stories;
