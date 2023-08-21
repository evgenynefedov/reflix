import React, { useState, useEffect } from 'react'
import Movie from './Movie';

function Rented({movies, rentUnrentMovie}) {
    return (
        <div className="rented">
            <h2>Rented movies</h2>
            {movies.map(m => <Movie posterPath={m.poster_path} rented={true} id={m.id} rentUnrentMovie={rentUnrentMovie} key={m.id} />)}
        </div>
    );
}

export default Rented;
