import { useEffect, useState } from 'react';
import {fetchGiphyByMovieTitle} from './../../utilities/Utilities'

export default function ModalTemplate({ movieTitle }) {

    const [giphy, setGiphy] = useState(false)

    useEffect(() => {
        fetchGiphyByMovieTitle(movieTitle).then((g) => {
            setGiphy(g)
          })
    }, [])

    return (
        <div>
            <p>Rented <b><q>{movieTitle}</q></b> Successfully! Congrats!</p>
            {giphy !== false && <img src={giphy} />}
        </div>
    );
}