import React, { useContext } from 'react'
import { UserContext } from '../App';
const ChildC = () => {
    const UserInfo=useContext(UserContext);
  return (
    <div>ChildC {UserInfo.name}</div>
  )
}

export default ChildC