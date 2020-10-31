import React from 'react';
import Loader from '../../../Misc/Loader';
import {
 MovieCardContainer,
 MovieDescription,
 MovieRating,
 MovieTitle,
 MoviePosterWrapper,
} from './MovieCardElements';

const MovieCard = ({ movie, isLoading, url, size, movieNum }) => {
 return (
  <>
   {isLoading ? (
    <MovieCardContainer>
     <Loader />
    </MovieCardContainer>
   ) : (
    <MovieCardContainer>
     <MovieTitle>{movie[movieNum].original_title}</MovieTitle>
     <MoviePosterWrapper>
      <img
       src={`${url}${size}${movie[movieNum].poster_path}`}
       alt={movie[movieNum].original_title}></img>
     </MoviePosterWrapper>
     <MovieDescription>{movie[movieNum].overview}</MovieDescription>
     <MovieDescription>
      Released: {movie[movieNum].release_date}
     </MovieDescription>
     <MovieRating>Rating: {movie[movieNum].vote_average}</MovieRating>
    </MovieCardContainer>
   )}
  </>
 );
};

export default MovieCard;
