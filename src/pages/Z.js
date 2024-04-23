import React, { useContext } from 'react'
import { myContext } from '../App'

export default function Z() {
  const user=useContext(myContext);
  
  return (
    <>
    {console.log(user)}
    <h1> Component Z {user.surname}</h1>
    </>
  )
}
