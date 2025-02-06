import Card from "./Card";
import "../styles/MainContent.css";

export default function MainContent({ data, modifiers }) {
    return (
        <div className="main-content">
            {data.pokemon.map(pokemon => {
                return (
                    <div key={pokemon.id} className="pokemon-card">
                        <Card pathParameter={pokemon.name}/>
                    </div>
                )
            })}
        </div>
    )
}