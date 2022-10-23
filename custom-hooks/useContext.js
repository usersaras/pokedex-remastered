import { createContext , useContext, useState, useEffect } from "react";
import useFetch from "./useFetch";
import useFetchPokemons from "./useFetchPokemons"

const AppContext = createContext();



const AppProvider = ({children}) => {
  
   const fetchPokedexNames = useFetch('https://pokeapi.co/api/v2/pokedex/?offset=0&limit=29');
   const pokedexNames = fetchPokedexNames.data.results;

   const [pokedex, setPokedex] = useState([]);

   useEffect(()=>{
    setPokedex(pokedexNames)
   })

   const {dispatch, state} = useFetchPokemons();

    return <AppContext.Provider value={{state, pokedex}}>
            {children}
        </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext}