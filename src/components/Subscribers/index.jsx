import React from 'react'
import { getFollowers, getSingleUser, getUser } from '../../config/api'
import './Subscribers.scss'

const Subscribers = () => {
  const [data, setData] = React.useState(null)
  const [base, setBase] = React.useState(null)

  getFollowers(JSON.parse(localStorage.getItem('user')).id)
  .then(r => setData(r.data))

  // getSingleUser(data?.map(item => item.id))
  // .then(r => console.log(r.data))

  const arr = [1,2]


  return (
    <div className='subscribers'>
      {
        base?.map(item => (
          <div className='sub_blocks'>
            <img src={item.avatarka} alt="" />
            <h2>{item.username}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Subscribers