import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../config/api';

const StoriesCard = ({ userId, storiesId }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null)
  const [users, setUsers] = React.useState(null)

  React.useEffect(() => {
    getUsers()
    .then(r => setUsers(r.data))

    const newUser = users?.find(item => item.id === userId)
    setUser(newUser)
  }, [users])

  return (
    <div onClick={() => navigate(`/stories/${storiesId}`)}className="stories_card">
      <img
        src={user?.avatar ? user.avatar : "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"}
        alt=""
      />
      <span>{user?.username}</span>
    </div>
  )
}

export default StoriesCard