import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { TMDB_IMAGE_URL_SMALL, MOVIE_PRICE } from './../../utilities/Constants';
import RentUnrentButton from './RentUnrentButton';

function Movie({posterPath, id, title, rented, rentUnrentMovie, budget}) {

    return (
        <div className="movie">
            <Link className="menu-item" to={"/movies/" + id}>
                {posterPath ? 
                    <img src={TMDB_IMAGE_URL_SMALL + posterPath} /> : 
                    <div>{title}</div> }
            </Link>
            {(budget >= MOVIE_PRICE || typeof budget === 'undefined') ? <RentUnrentButton id={id} title={title} posterPath={posterPath} rented={rented} rentUnrentMovie={rentUnrentMovie} /> : null}
        </div>
    );
}

export default Movie;