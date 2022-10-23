import React, {useReducer, useEffect} from 'react'
const reducer = (state, action) => {
    switch(action.type){
        case "SET_POKEMON_SPECIES": 
            return {
                ...state,
                pokemonSpecies: action.payload
            }
            break;
        case "SET_SPECIES_URLS":
            return {
                ...state,
                speciesUrl: action.payload
            }
        case "SET_POKEMONS":
            return {
                ...state,
                pokemons: action.payload
            }
        case "SET_LOADING_FALSE":
            return{
                ...state,
                loading: false
            }
        default: 
            return{
                ...state
            }
            break;
    }
}
export default function useFetchPokemons() {
  const [state, dispatch] = useReducer(reducer, {speciesUrl:[], pokemonSpecies:[], pokemons: [], loading: true, pokedex: 5})

  const fetchPokedex = async() => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${state.pokedex}`);
    const data = await response.json();

    const urls = data.pokemon_entries.map(pokemonEntry => {
        return pokemonEntry.pokemon_species.url;
    })

    dispatch({type: "SET_SPECIES_URLS", payload: urls})
  }

  const fetchPokemonSpecies = async() => {
    const {speciesUrl} = state;
        const pokemonSpecies = await Promise.all(speciesUrl.map(async url => {
            const response = await fetch(url);
            return response.json()
        }));

       dispatch({type: "SET_POKEMON_SPECIES", payload: pokemonSpecies})
      
  }

  const fetchPokemons = async() => {
    const pokemonUrls = state.pokemonSpecies.map(pokemon => {
        return `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`;
    })

    const pokemons = await Promise.all(pokemonUrls.map(async url => {
        const response = await fetch(url);
        return response.json()
    }));
    
    dispatch({type: "SET_POKEMONS", payload: pokemons})
  }



  useEffect(()=>{
    fetchPokedex();
  }, [])

  useEffect(()=>{
    fetchPokemonSpecies();
  }, [state.speciesUrl])

  useEffect(()=>{
    fetchPokemons();
  }, [state.pokemonSpecies])

  useEffect(()=>{
    if(state.pokemons.length > 1){
        dispatch({type: "SET_LOADING_FALSE"})
      }
  }, [state.pokemons])

  return {dispatch, state}
}
