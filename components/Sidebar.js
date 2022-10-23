import React, { useContext } from 'react'
import {useGlobalContext} from '../custom-hooks/useContext'

export default function Sidebar({isVisible, setIsVisible}) {
    const {pokedex} = useGlobalContext();

    const showPokedex = () => {

    }

  return (
    <div class={`position-absolute top-0 sidebar ${isVisible && 'show-sidebar'} `}>
        <div className="bg-light p-5 h100vh">
            <div className="d-flex gap-3 align-items-center">
            <h3 className="mb-0">Select Pokedex</h3>
            <i className="fa-regular fa-square-minus fa-2x" onClick={()=>{setIsVisible(false)}}></i>
            </div>
            <hr />
            <ul className="p-0 mt-3">
                {pokedex.map((pokedex, index) => {
                    return <li 
                    key={index} 
                    onClick={()=>{showPokedex(pokedex)}}
                    className="first-letter-uppercase list-unstyled pointer"
                    >{pokedex.name.replace('-', ' ').replace('-', ' ')}</li>
                })}
            </ul>
            
           
        </div>
    </div>
  )
}
