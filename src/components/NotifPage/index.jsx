import React from 'react'
import { confirmRequest, deleteRequest, getFollowRequests } from '../../config/api'
import '../../apps/Layout/Notifications/Notifications.scss'

const NotifPage = () => {
  const accessToken = localStorage.getItem('accessToken')
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    getFollowRequests(accessToken)
    .then(r => {
      setData(r.data)
      console.log(r.data);
    })
  }, [data])

  const handleConfirm = (id) => {
    confirmRequest(id, {is_confirmed: true}, accessToken)
  }

  const handleDeleted = (id) => {
    deleteRequest(id, accessToken)
  }

  return (
    <div className="notif_container mobile">
      <h2>Follow Requests</h2>
      <div className='notif_block'>
        {
          data?.map(obj => <div className='notif_cards'>
            <div>
              <img src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" alt="" />
              <span>user</span>
            </div>
            <div>
              <button className='apply' onClick={() => handleConfirm(obj?.id)}>Apply</button>
              <button className='delete' onClick={() => handleDeleted(obj?.id)}>Delete</button>
            </div>
          </div>)
        } 
        {
          !data || data?.length == 0 && <span>No Requests Yet</span>
        }
      </div>
    </div>
  )
}

export default NotifPage