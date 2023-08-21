import React, { useState, useEffect } from 'react'
import { SEARCH_DELAY, SEARCH_MIN_LENGTH } from './../../utilities/Constants'
import { filterMovies, fetchRatedMovies, fetchSearchResults } from './../../utilities/Utilities'
import Rated from "./Rated";
import Rented from "./Rented";
import Budget from "./Budget";
import Searchbar from "./Searchbar";
import SearchResults from './SearchResults';

function Catalog({userData, rentUnrentMovie}) {

    const [ratedMovies, setRatedMovies] = useState([])
    const [searchResults, setSearchResults] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    //fetch rated movies
    useEffect(() => { 
        fetchRatedMovies().then(m => {setRatedMovies(filterMovies(m.results, userData.rented))})
    }, [])

    //catch search query changes and fetch search results
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (searchQuery.length >= SEARCH_MIN_LENGTH) {
                fetchSearchResults(searchQuery).then(r => { setSearchResults(filterMovies(r.results, userData.rented)) })
            } else {
                setSearchResults(false)
            }
        }, SEARCH_DELAY)
        
        return () => { clearTimeout(timeout) }
    }, [searchQuery])

    //update list after renting/unrenting
    useEffect(() => {
        setRatedMovies(filterMovies(ratedMovies, userData.rented))
    }, [userData])

    return (
        <div className="catalog">
            <div className="catalog-header">
                <Searchbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
                <Budget budget={userData.budget} />
            </div>

            {userData.rented.length > 0 && <Rented movies={userData.rented} rentUnrentMovie={rentUnrentMovie}/>}
            
            {(searchResults !== false && searchQuery.length >= SEARCH_MIN_LENGTH) ?
                <SearchResults movies={searchResults} searchQuery={searchQuery} rentUnrentMovie={rentUnrentMovie} budget={userData.budget} /> :
                <Rated movies={ratedMovies} rentUnrentMovie={rentUnrentMovie} budget={userData.budget} />}
            
        </div>
    );
}

export default Catalog;
