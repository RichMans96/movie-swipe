import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard/MovieCard';
import { MovieContainer, MovieWrapper, NextMovie } from './MovieElements';
import Loader from '../../Misc/Loader';

const Movie = () => {
 const [rank, setRank] = useState({ pageNo: 1, movieNo: 1 });
 const [movie, setMovie] = useState('');
 const [isLoading, setIsLoading] = useState(true);
 const [imageUrl, setImageUrl] = useState('https://image.tmdb.org/t/p/');

 function handleClick(e) {
  e.preventDefault();
  setRank({
   pageNo: Math.floor(Math.random() * 500 + 1),
   movieNo: Math.floor(Math.random() * 20),
  });
 }

 async function fetchData(page) {
  setIsLoading(true);
  const result = await axios(
   `https://api.themoviedb.org/3/discover/movie?api_key=a035c9128c767a8b70c9413632d63cd0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_average.gte=1.0`
  );
  setMovie(result.data.results);
  setIsLoading(false);
 }

 useEffect(() => {
  fetchData(rank.pageNo);
 }, [rank]);

 return (
  <>
   {isLoading ? (
    <MovieContainer>
     <MovieWrapper>
      <Loader />
     </MovieWrapper>
    </MovieContainer>
   ) : (
    <MovieContainer>
     <MovieWrapper>
      <MovieCard
       movie={movie}
       url={imageUrl}
       size={'w342'}
       movieNum={rank.movieNo}
      />
      <NextMovie onClick={handleClick}>Next!</NextMovie>
     </MovieWrapper>
    </MovieContainer>
   )}
  </>
 );
};

export default Movie;
