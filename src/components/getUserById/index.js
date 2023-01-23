import React from 'react'
import { getUserById } from '../../config/api'

const GetUserById = ({id}) => {
  const [data, setData] = React.useState(null)

  getUserById(id)
  .then(r => {
    console.log(r.data)
    setData(r.data)
  })

  return data
}

export default GetUserById