


function Movie( { movie } ) {
    return(
            <div className="movie">
                <div className="movie-year">
                    <p>{movie.Year}</p>
                </div>

                <div className="movie-img">
                    <img src={movie.Poster != 'N/A' ? movie.Poster : "https://via.placeholder.com/400" } alt={movie.Title} />
                </div>

                <div className="movie-title">
                    <h3> {movie.Type} </h3>
                    <span> {movie.Title} </span>
                </div>
            </div>
    )
}

export default Movie