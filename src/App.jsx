import { useState, useRef, useEffect } from 'react';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { pokemonObjects } from './api/api_data';
import './App.css'

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemon, setPokemon] = useState(pokemonObjects);

  const data = {
    score,
    bestScore,
    pokemon
  }

  const modifiers = {
    handleScoreChange: (score) => {
      setScore(score);
    },
    handleBestScore: (bestScore) => {
      setBestScore(bestScore);
    },
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