import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import {
 MovieContainer,
 MovieDescription,
 MovieRating,
 MovieTitle,
 MoviePosterWrapper,
} from './MovieElements';
import Loader from '../../Loader';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'w342';
const API_KEY = 'a035c9128c767a8b70c9413632d63cd0';
const PAGE_RANDOMIZER = Math.floor(Math.random() * 500 + 1);
const MOVIE_RANDOMIZER = Math.floor(Math.random() * 20);

const Movie = () => {
 const [movie, setMovie] = useState('');
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const fetchData = async () => {
   const result = await axios(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${PAGE_RANDOMIZER}&vote_average.gte=8.0`
   );
   setMovie(result.data.results);
   setIsLoading(false);
  };
  fetchData();
 }, []);

 return (
  <>
   {isLoading ? (
    <MovieContainer>
     <Loader />
    </MovieContainer>
   ) : (
    <MovieContainer>
     <MovieTitle>{movie[MOVIE_RANDOMIZER].original_title}</MovieTitle>
     <MoviePosterWrapper>
      <img
       src={`${BASE_URL}${SIZE}${movie[MOVIE_RANDOMIZER].poster_path}`}
       alt={movie[MOVIE_RANDOMIZER].original_title}></img>
     </MoviePosterWrapper>
     <MovieDescription>{movie[MOVIE_RANDOMIZER].overview}</MovieDescription>
     <MovieRating>{movie[MOVIE_RANDOMIZER].vote_average}</MovieRating>
    </MovieContainer>
   )}
  </>
 );
};

export default Movie;
