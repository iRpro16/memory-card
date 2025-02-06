import { useState, useRef, useEffect } from 'react';
import MainContent from './components/MainContent';
import Header from './components/Header';
import './App.css'

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const data = {
    score,
    bestScore
  }

  const modifiers = {
    handleScoreChange: (score) => {
      setScore(score);
    },
    handleBestScore: (bestScore) => {
      setBestScore(bestScore);
    }
  }


  return (
    <>
      <Header data={data}/>
      <MainContent modifiers={modifiers} data={data}/>
    </>
  )

}