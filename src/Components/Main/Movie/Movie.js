import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard/MovieCard';
import { MovieContainer, NextMovie } from './MovieElements';

const API_KEY = 'a035c9128c767a8b70c9413632d63cd0';

const Movie = () => {
 const [movie, setMovie] = useState('');
 const [isLoading, setIsLoading] = useState(true);
 const [pageNo, setPageNo] = useState(1);
 const [movieNo, setMovieNo] = useState(1);
 const [url, setUrl] = useState('https://image.tmdb.org/t/p/');

 function handleClick(e) {
  e.preventDefault();
  setMovieNo(Math.floor(Math.random() * 20));
  setPageNo(Math.floor(Math.random() * 500 + 1));
 }

 useEffect(() => {
  const fetchData = async () => {
   const result = await axios(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&vote_average.gte=1.0`
   );
   setMovie(result.data.results);
   setIsLoading(false);
  };
  fetchData();
 }, []);

 console.log(movie);
 console.log(pageNo);
 console.log(movieNo);

 return (
  <MovieContainer>
   <MovieCard
    movie={movie}
    isLoading={isLoading}
    url={url}
    size={'w342'}
    movieNum={movieNo}
   />
   <NextMovie onClick={handleClick}>Next!</NextMovie>
  </MovieContainer>
 );
};

export default Movie;
