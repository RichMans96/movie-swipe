import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
 MovieContainer,
 MovieDescription,
 MovieRating,
 MovieTitle,
 MoviePosterWrapper,
} from './MovieElements';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'w342';
const API_KEY = 'a035c9128c767a8b70c9413632d63cd0';

const Movie = () => {
 const [movie, setMovie] = useState('');
 useEffect(() => {
  async function fetchData() {
   const result = await axios(
    `https://api.themoviedb.org/3/movie/741067?api_key=${API_KEY}&language=en-US`
   );
   setMovie(result.data);
  }
  fetchData();
 }, []);

 console.log(movie);

 return (
  <MovieContainer>
   <MovieTitle>{movie.original_title}</MovieTitle>
   <MoviePosterWrapper>
    <img src={`${BASE_URL}${SIZE}${movie.poster_path}`}></img>
   </MoviePosterWrapper>
   <MovieDescription>{movie.overview}</MovieDescription>
   <MovieRating>{movie.vote_average}</MovieRating>
  </MovieContainer>
 );
};

export default Movie;
