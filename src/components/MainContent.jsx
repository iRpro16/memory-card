import "../styles/MainContent.css";
import { useRef } from "react";
import Card from "./Card";
import shuffleArray from "../utils/shuffleArray";

export default function MainContent({ data, modifiers }) {
    const clickedArray = useRef([]);

    const gameOver = () => {
        data.score.current > data.bestScore.current ? 
        data.bestScore.current = data.score.current : data.bestScore.current;

        data.score.current = 0;
        clickedArray.current = [];
    }

    const handleTurn = (e) => {
        data.score.current = data.score.current + 1;
        clickedArray.current.push(e.target.id);
    }

    const handleCardClick = (e) => {
        if (clickedArray.current.includes(e.target.id)) {
            gameOver();
        } else {
            handleTurn(e);
        }

        let arrayCopy = shuffleArray(data.pokemon);
        modifiers.handlePokemon(arrayCopy)
    }

    return (
        <div className="main-content">
            {data.pokemon.map(pokemon => {
                return (
                    <div 
                    key={pokemon.value}
                    className="pokemon-card" 
                    onClick={handleCardClick}
                    >
                        <Card pathParameter={pokemon.name} value={pokemon.value}/>
                    </div>
                )
            })}
        </div>
    )
}