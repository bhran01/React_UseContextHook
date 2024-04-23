import React from 'react'
import C from './C'

export default function B(props) {
    return (
        <>
            <h1>B component </h1>
            <C title={props.name}/>
        </>
    )
}
