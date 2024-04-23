import React from 'react'
import B from './B'

export default function A({surname}) {
  return (
    <>
        <h1>A component {surname}</h1>
        <B name={surname}/>
    </>
  )
}
