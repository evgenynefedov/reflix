import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { TMDB_FETCH_OPTIONS, TMDB_IMAGE_URL_BIG } from '../utilities/Constants';
import { getYearFromDate } from './../utilities/Utilities.js'

function DetailedMovie() {
    const { id } = useParams();

    const imageUrl = "https://image.tmdb.org/t/p/w500"

    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, TMDB_FETCH_OPTIONS)
            const data = await response.json()
            setMovie(data)
        }
        getMovie()
    }, [])

    return (
        <div className="detailed-movie">
            <h2>{movie.title} ({getYearFromDate(movie.release_date)})</h2>
            <img src={TMDB_IMAGE_URL_BIG + movie.backdrop_path} />
            <p>{movie.overview}</p>
        </div>
    );
}

export default DetailedMovie;