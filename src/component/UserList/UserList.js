import React from 'react'
import User from './User/User.js'

const UserList = ({listOfUSer}) => {
  return (
    <div >
    {listOfUSer.map(el=><User el={el} key={el.id}/>)}
  </div>
  )
}

export default UserList

