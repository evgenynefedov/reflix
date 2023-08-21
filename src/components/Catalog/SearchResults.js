import { MESSAGES } from './../../utilities/Constants'
import Movies from './Movies';

function SearchResults({movies, rentUnrentMovie, budget}) {

    return (
        <div className="rated">
            <h2>Search results</h2>
            {movies.length > 0 ?
                <Movies movies={movies} rentUnrentMovie={rentUnrentMovie} budget={budget} />:
                <div>{MESSAGES.EMPTY_SEARCH_RESULT}</div>}
        </div>
    );
}

export default SearchResults;
