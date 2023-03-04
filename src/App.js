import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [pokemons, setPokemons] = useState([])
  
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response=>response.json())
    .then(json=>setPokemons(json.results))
  }, [])

  return (
    <div className="App">
    {pokemons.map(pokemon=><h1>{pokemon.name}</h1>)}
    </div>
  );
}






export default App;
