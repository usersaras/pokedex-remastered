import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pokemon() {

    let {id} = useParams();
    console.log(id);
  return (
    <div>
        <h1>Pokemon</h1>
    </div>
  )
}
