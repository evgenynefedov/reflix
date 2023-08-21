import Movie from './Movie';

function Movies({movies, rentUnrentMovie, budget}) {
    return (
        <div className="movies">
            { movies.map(m => <Movie posterPath={m.poster_path} title={m.title} rented={m.rented} id={m.id} rentUnrentMovie={rentUnrentMovie} budget={budget} key={m.id} />)}
        </div>
    );
}

export default Movies;
