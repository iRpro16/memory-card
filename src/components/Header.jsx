export default function Header ({ data }) {
    return (
        <div className="header">
            <h1>Memory Game</h1>
            <div>
                <p>Score: {data.score.current}</p>
                <p>Best Score: {data.bestScore.current}</p>
            </div>
        </div>
    )
}