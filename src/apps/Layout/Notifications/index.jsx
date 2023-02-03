import React from 'react';
import { getFollowRequests } from '../../../config/api';
import './Notifications.scss';

const Notif = () => {
  const accessToken = localStorage.getItem('accessToken')
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    getFollowRequests(accessToken)
    .then(r => {
      console.log(r.data)
      setData(r.data)
    })
  }, [data])

  const handleConfirm = (id) => {

  }

  const handleDeleted = (id) => {

  }

  return (
    <div className="notif_container">
      <h2>Notifications</h2>
      <div className='notif_block'>
        {
          data?.map(obj => <div className='notif_cards'>
            <img src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" alt="" />
            <span>user</span>
            <button onClick={() => handleConfirm(obj?.id)}>Apply</button>
            <button onClick={() => handleDeleted(obj?.id)}>Delee</button>
          </div>)
        }
      </div>
    </div>
  );
};

export default Notif