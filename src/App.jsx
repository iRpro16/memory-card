import { useState, useRef } from 'react';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { pokemonObjects } from './api/api_data';
import './App.css'

export default function App() {
  const score = useRef(0);
  const bestScore = useRef(0);
  const [pokemon, setPokemon] = useState(pokemonObjects);

  const data = {
    score,
    bestScore,
    pokemon
  }

  const modifiers = {
    handlePokemon: (pokemon) => {
      setPokemon(pokemon);
    }
  }


  return (
    <>
      <Header data={data}/>
      <MainContent modifiers={modifiers} data={data}/>
    </>
  )

}