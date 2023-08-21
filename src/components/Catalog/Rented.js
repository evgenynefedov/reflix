import Movies from './Movies';

function Rented({movies, rentUnrentMovie, budget}) {
    return (
        <div className="rented">
            <h2>Rented movies</h2>
            {//movies.map(m => <Movie posterPath={m.poster_path} rented={true} id={m.id} rentUnrentMovie={rentUnrentMovie} key={m.id} />)
            }
            <Movies movies={movies} rentUnrentMovie={rentUnrentMovie} budget={budget} />
        </div>
    );
}

export default Rented;
