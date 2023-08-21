import {MAX_MOVIES_ON_PAGE} from './Constants'

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
            poster_path: m.poster_path,
            rented: (rentedMovies.find(r => r.id == m.id))
        })
    )
}