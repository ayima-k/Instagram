import React from 'react'
import { getFollowings } from '../../config/api'
import './Subscciptions.scss'

const Subscriptions = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    getFollowings(user?.id)
    .then(r => setData(r.data))
  }, [data])

  console.log(data);

  return (
    <div className='subscriptions'>
      {
        data?.length >= 1 && data?.map(obj => (
          <div key={obj?.id}>{obj?.to_user}</div>
        ))
      }
    </div>
  )
}

export default Subscriptions