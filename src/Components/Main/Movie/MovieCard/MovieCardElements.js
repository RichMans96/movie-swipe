import styled from 'styled-components';

export const MovieCardContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100%;
 position: relative;
`;

export const MovieTitle = styled.h1`
 color: #fff;
 font-size: 44px;
 text-align: center;
 margin: 10px 0;
`;

export const MovieDescription = styled.p`
 margin: 24px;
 color: #fff;
 font-size: 24px;
 text-align: center;
 max-width: 600px;
`;

export const MovieRating = styled.p`
 margin: 18px;
 color: gold;
 font-size: 30px;
 text-align: center;
`;

export const MoviePosterWrapper = styled.div`
 height: 400px;
 width: 200px;
 display: flex;
 justify-content: center;
 margin: 10px 0;
`;
