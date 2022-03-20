import React, { Fragment, useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';
import MovieItem from './MovieItem';
import InsertMovie from './InsertMovie';
const Movies = () => {
    const movieContext = useContext(MovieContext);
    const { movies, getMovies } = movieContext;
    
    useEffect(() => {
        getMovies();
    });

    return( <div style={userStyle} >
    {movies.map(movie =>(
        <MovieItem key={movie._id}movie={movie}  />    
    ))}
</div>);
};
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap : '3 rem'
}

export default Movies;
