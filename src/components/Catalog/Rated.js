import React, { useState, useEffect } from 'react'
import Movie from './Movie';

function Rated({movies, rentUnrentMovie}) {
    return (
        <div className="rated">
           <h2>Rated movies</h2>
           {movies.map(m => <Movie posterPath={m.poster_path} rented={m.rented} id={m.id} rentUnrentMovie={rentUnrentMovie} key={m.id} />)}
        </div>
    );
}

export default Rated;
