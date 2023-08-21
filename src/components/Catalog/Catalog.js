import React, { useState, useEffect } from 'react'
import { TMDB_FETCH_OPTIONS, TMDB_RANKED_API_URL, TMDB_SEARCH_API_URL, SEARCH_DELAY } from './../../utilities/Constants'
import { filterMovies } from './../../utilities/Utilities'
import Rated from "./Rated";
import Rented from "./Rented";
import Budget from "./Budget";
import Searchbar from "./Searchbar";

function Catalog({userData, rentUnrentMovie}) {

    const [ratedMovies, setRatedMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    //fetch rated movies
    useEffect(() => { fetchMovies() }, [])

    //searching
    useEffect(() => {
        const timeout = setTimeout(() => { if(searchQuery.length > 2) fetchMovies(searchQuery) }, SEARCH_DELAY)
        return () => { clearTimeout(timeout) }
    }, [searchQuery])

    //update list after renting/unrenting
    useEffect(() => {
        setRatedMovies(filterMovies(ratedMovies, userData.rented))
    }, [userData])

    const fetchMovies = async function (searchRequest) {
        const response = await fetch((searchRequest ? TMDB_SEARCH_API_URL + searchRequest : TMDB_RANKED_API_URL), TMDB_FETCH_OPTIONS)
        const data = await response.json()

        setRatedMovies(filterMovies(data.results, userData.rented))
    }

    return (
        <div className="catalog">
            <div className="catalog-header">
                <Searchbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
                <Budget budget={userData.budget} />
            </div>

            {userData.rented.length > 0 && <Rented movies={userData.rented} rentUnrentMovie={rentUnrentMovie}/>}
            
            <Rated movies={ratedMovies} rentUnrentMovie={rentUnrentMovie} />
        </div>
    );
}

export default Catalog;
