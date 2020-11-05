import React from 'react';
import {
 MovieCardContainer,
 MovieDescription,
 MovieRating,
 MovieTitle,
 MoviePosterWrapper,
} from './MovieCardElements';

const MovieCard = ({ movie, url, size, movieNum }) => {
 console.log(movie);
 return (
  <>
   <MovieCardContainer>
    <MovieTitle>{movie[movieNum].original_title}</MovieTitle>
    <MoviePosterWrapper>
     <img
      src={`${url}${size}${movie[movieNum].poster_path}`}
      alt={movie[movieNum].title}></img>
    </MoviePosterWrapper>
    <MovieDescription>
     {movie[movieNum].overview
      ? movie[movieNum].overview
      : 'Sorry, no overview provided!'}
    </MovieDescription>
    <MovieDescription>
     Released: {movie[movieNum].release_date}
    </MovieDescription>
    <MovieRating>Rating: {movie[movieNum].vote_average}</MovieRating>
   </MovieCardContainer>
  </>
 );
};

export default MovieCard;
