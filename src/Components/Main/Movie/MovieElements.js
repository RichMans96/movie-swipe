import styled from 'styled-components';

export const MovieContainer = styled.div`
 background-color: #2a2b2e;
 height: 1100px;
`;

export const MovieWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;

 @media screen and (max-width: 768px) {
  flex-direction: column;
 }
`;

export const NextMovie = styled.button`
 border-radius: 50px;
 white-space: nowrap;
 padding: 14px 36px;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
`;
