import React from 'react'
import Z from './Z'

export default function C(props) {
    return (
        <>
            <h1>C component</h1>
            <Z title={props.title}/>
        </>
    )
}
