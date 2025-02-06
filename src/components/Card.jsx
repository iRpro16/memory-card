import { useState, useEffect } from "react";

export default function Card({ pathParameter }) {
    const [data, setData] = useState(null);
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(BASE_URL + pathParameter, {
            signal: signal,
        })
        .then(response => response.json())
        .then(json => setData(json)) // handle success
        .catch(error => console.error(error))

        return () => {
            controller.abort();
        }
    }, [pathParameter]);

    return (
        <div>
            <p>{pathParameter}</p>
            {data ? <img src={data.sprites.front_default} alt="" />: "Loading..."}
        </div>
    )
}