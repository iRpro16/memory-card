import "../styles/Header.css";

export default function Header ({ data }) {
    return (
        <div className="header">
            <div>
                <h1>Memory Game</h1>
                <img src="/game.png" className="pokeball-img"/>

            </div>
            <div>
                <p>Score: {data.score.current}</p>
                <p>Best Score: {data.bestScore.current}</p>
            </div>
        </div>
    )
}