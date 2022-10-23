import { Link } from 'react-router-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {useState, useEffect} from 'react';
import {useGlobalContext} from './custom-hooks/useContext'

import Pokemon from './components/Pokemon'
import Sidebar from './components/Sidebar'


function App() {

  const {state} = useGlobalContext();
  const {loading, pokemons} = state;

  let sortPokemons = pokemons;

  console.log(sortPokemons);

  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(()=>{
    let allType=[]
    let types = pokemons.map(pokemon => {
        return pokemon.types.map((type)=>{
          return type.type.name
        })
    })
    types = types.map(type=>{
      type.map((t, index)=>{
       allType = [...allType, t]
      })
    })
    types = new Set([...allType])
    setPokemonTypes([...types])
  }, [loading])
  

  if(loading){
    return "Loading"
  }

  return (
   
    <div className="App">
        {/* <Link to="/link">
          Pokemon
        </Link> */}
         
        <section id="topbar" className="bg-light p-3">
          <div className="container d-flex gap-3 align-items-center">
            <i class="fa fa-bars fa-2x" aria-hidden="true" onClick={()=>{setSidebarIsVisible(true)}}></i>
            <h1 className="fw-bold mb-0">Pokedex</h1>
          </div>
        </section>

        <Sidebar isVisible={sidebarIsVisible} setIsVisible={setSidebarIsVisible} />

        <section id="searchBar">
          <div className="container pt-4 d-flex">
           <i className="fa fa-search p-3 bg-light border border-end-0 rounded-start"></i> <input type="text" name="searchPokemons" id="searchPokemons" className="p-0 px-3 w-100 border rounded-end border-start-0" placeholder='Search for Pokemons...' />
          </div>
        </section>

        <section id="sortBy">
        <div className="container mt-4 d-flex gap-2 filter-buttons">
          {pokemonTypes.map((type, index)=>{
            return <btn key={index} className="first-letter-uppercase hover-dropshadow">{
              type === "bug" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/240px-Pok%C3%A9mon_Bug_Type_Icon.svg.png" alt={type} /> 
              : type === "dark" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/240px-Pok%C3%A9mon_Dark_Type_Icon.svg.png" alt={type} />
              : type === "dragon" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/240px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png" alt={type} /> 
              : type === "electric" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/240px-Pok%C3%A9mon_Electric_Type_Icon.svg.png" alt={type} />
              : type === "fairy" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/240px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png" alt={type} /> 
              : type === "fighting" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/240px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png" alt={type} /> 
              : type === "fire" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/240px-Pok%C3%A9mon_Fire_Type_Icon.svg.png" alt={type} /> 
              : type === "flying" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/240px-Pok%C3%A9mon_Flying_Type_Icon.svg.png" alt={type} />
              : type === "ghost" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/240px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png" alt={type} />
              : type === "grass" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/240px-Pok%C3%A9mon_Grass_Type_Icon.svg.png" alt={type} />
              : type === "ground" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/240px-Pok%C3%A9mon_Ground_Type_Icon.svg.png" alt={type} />
              : type === "ice" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/240px-Pok%C3%A9mon_Ice_Type_Icon.svg.png" alt={type} />
              : type === "normal" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/240px-Pok%C3%A9mon_Normal_Type_Icon.svg.png" alt={type} />
              : type === "poison" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/240px-Pok%C3%A9mon_Poison_Type_Icon.svg.png" alt={type} />
              : type === "psychic" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/240px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png" alt={type} />
              : type === "rock" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/240px-Pok%C3%A9mon_Rock_Type_Icon.svg.png" alt={type} />
              : type === "steel" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/240px-Pok%C3%A9mon_Steel_Type_Icon.svg.png" alt={type} />
              : type === "water" 
              ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/240px-Pok%C3%A9mon_Water_Type_Icon.svg.png" alt={type} />
              : ""
            }</btn>
          })}
          </div>
        </section>

        <section id="pokemons">
         <div className="container py-3">
          <div className="row g-3">
            {pokemons.map((pokemon,index) => {
              return <div key={pokemon.id} className="col-md-4">
                <Link to={`/pokemon/${pokemon.id}`} style={{textDecoration: 'none'}}>
                <div className="border rounded p-3 d-flex flex-column align-items-center">
                <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                  alt={pokemon.name} 
                  className="w-50" 
                  loading="lazy"
                />
                <h3 className="pokemon-heading">{pokemon.name}</h3>
                <div className="d-flex gap-1">
                  {pokemon.types.map((type, index) => {
                    return <span key={index} className="btn btn-secondary">{type.type.name}</span>
                  })}
                </div>
                </div>
                </Link>
              </div>
            })}
          </div>
         </div>
        </section>
    </div>

  );
}

export default App;
