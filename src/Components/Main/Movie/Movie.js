import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
 MovieContainer,
 MovieDescription,
 MovieRating,
 MovieTitle,
} from './MovieElements';

const Movie = () => {
 const [movie, setMovie] = useState('');

 useEffect(() => {
  async function fetchData() {
   const result = await axios(
    'https://api.themoviedb.org/3/movie/284053?api_key=a035c9128c767a8b70c9413632d63cd0&language=en-US'
   );
   setMovie(result.data);
  }
  fetchData();
 }, []);

 console.log(movie);
 return (
  <MovieContainer>
   <MovieTitle>{movie.original_title}</MovieTitle>
   <MovieDescription>{movie.overview}</MovieDescription>
   <MovieRating>{movie.vote_average}</MovieRating>
  </MovieContainer>
 );
};

export default Movie;
