import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllStories, getUserById } from '../../config/api'

const StoriesCard = () => {
  const [data, setData] = React.useState(null)
  const [user, setUser] = React.useState(null)
  const accessToken = localStorage.getItem('accessToken')
  const { id } = useParams()

  console.log(id);

  React.useEffect(() => {
    getAllStories(accessToken)
    .then(r => {
      setData(r.data?.user === Number(id) ? r.data : null)
    })
    data?.map(obj => getUserById(obj?.user).then(r => setUser({...r.data})))
  }, [data])

  console.log(data);

  return (
    <div>StoriesCard</div>
  )
}

export default StoriesCard