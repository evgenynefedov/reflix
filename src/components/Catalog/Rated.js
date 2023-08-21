import Movies from './Movies';

function Rated({movies, rentUnrentMovie, budget}) {
    return (
        <div className="rated">
            <h2>Rated movies</h2>
            <Movies movies={movies} rentUnrentMovie={rentUnrentMovie} budget={budget} />
        </div>
    );
}

export default Rated;
