import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { TMDB_IMAGE_URL_BIG } from '../utilities/Constants';
import { getYearFromDate, fetchDetailedMovie } from './../utilities/Utilities.js'

function DetailedMovie() {
    const { id } = useParams();

    const [movie, setMovie] = useState(false)

    useEffect(() => { 
        fetchDetailedMovie(id).then(detailedMovie => {setMovie(detailedMovie)})
    }, [])

    return (
        <div className="detailed-movie">
             {movie ? 
                <>
                    <h2>{movie.title} ({getYearFromDate(movie.release_date)})</h2>
                    {movie.backdrop_path ? <img src={TMDB_IMAGE_URL_BIG + movie.backdrop_path} /> : null}
                    {movie.overview ? <p>{movie.overview}</p> : null}
                </>:
                null
            }
        </div>
    );
}

export default DetailedMovie;