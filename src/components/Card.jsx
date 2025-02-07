import { useState, useEffect } from "react";
import '../styles/Card.css';

export default function Card({ pathParameter, value }) {
    const [data, setData] = useState(null);
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

    useEffect(() => {
        async function startFetching() {
            setData(null); //set state to null
            const result = await fetch(BASE_URL + pathParameter);
            const json = await result.json();
            if (active) {
                setData(json);
            }
        }

        let active = true;
        startFetching();
        return () => {
            active = false;
        }
    }, [pathParameter]);

    return (
        <div id={value} className={pathParameter}>
            <p>{pathParameter}</p>
            {data ? <img 
                src={data.sprites.front_default} 
                id={value} 
                className="pokemon-img"
                /> : "Loading..."}
        </div>
    )
}