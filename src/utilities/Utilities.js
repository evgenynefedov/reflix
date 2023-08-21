import {
    MAX_MOVIES_ON_PAGE, 
    TMDB_FETCH_OPTIONS, 
    TMDB_RANKED_API_URL,
    TMDB_SEARCH_API_URL,
    TMDB_DETAILED_API_URL
} from './Constants'

export const getYearFromDate = function (date) {
    const d = new Date(date);
    return d.getFullYear()
}

export const filterMovies = function (rantedMovies, rentedMovies){
    return rantedMovies
        .splice(0, MAX_MOVIES_ON_PAGE)
        .map( m =>
        ({
            id: m.id,
            title: m.title,
            poster_path: m.poster_path,
            rented: (rentedMovies.find(r => r.id == m.id))
        })
    )
}

export const fetchAPIData = async function(requestString){
    try {
        const response = await fetch(requestString, TMDB_FETCH_OPTIONS)        
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }

}

export const fetchRatedMovies = async function () {
    return await fetchAPIData(TMDB_RANKED_API_URL)
}

export const fetchSearchResults = async function (searchRequest) {
    return await fetchAPIData(TMDB_SEARCH_API_URL + searchRequest)
}

export const fetchDetailedMovie = async function(id){
    return await fetchAPIData(TMDB_DETAILED_API_URL + id)
}