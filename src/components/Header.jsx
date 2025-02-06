export default function Header ({ data }) {
    return (
        <div className="header">
            <h1>Memory Game</h1>
            <div>
                <p>Score: {data.score}</p>
                <p>Best Score: {data.bestScore}</p>
            </div>
        </div>
    )
}