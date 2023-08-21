import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { TMDB_IMAGE_URL_SMALL } from './../../utilities/Constants';
import RentUnrentButton from './RentUnrentButton';

function Movie({posterPath, id, rented, rentUnrentMovie}) {

    return (
        <div className="movie">
            <Link className="menu-item" to={"/movies/" + id}>
                <img src={TMDB_IMAGE_URL_SMALL + posterPath} />
            </Link>
            <RentUnrentButton id={id} posterPath={posterPath} rented={rented} rentUnrentMovie={rentUnrentMovie} />
        </div>
    );
}

export default Movie;