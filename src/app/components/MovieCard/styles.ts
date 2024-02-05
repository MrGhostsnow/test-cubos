"use client";
import styled, { CSSProperties } from 'styled-components';

interface SectionInfosProps {
  hasPoster: boolean;
}

export const ContainerMovieCard = styled.div`
  width: 220px;
  height: 330px;
  background-color: #ececef;
  font-family: "Montserrat", sans-serif;

  

  @media screen and (max-width: 768px) {
    width: 700px;
  }

  @media screen and (max-width: 480px) {
    width: 400px;
    justify-content: center;
  }
`;

export const MoviePoster = styled.img`
  max-width: 235px;
  max-height: 330px;
  color: #000;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SectionInfos = styled.div<SectionInfosProps>`
  position: ${(props) => (props.hasPoster ? 'relative' : 'block')};
  top: ${(props) => (props.hasPoster ? '-14.3rem' : '0')};
  display: flex;
  height: ${(props) => (props.hasPoster ? '230px' : '95%')};
  max-width: 235px;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
  ${ContainerMovieCard}:hover & {
    background: linear-gradient(
      to bottom,
      rgba(18, 17, 19, 0),
      rgba(18, 17, 19, 0.8),
      rgba(
        18, 17, 19, 1)
    );
  }
`;

export const SectionMovieAverage = styled.div`
  ${ContainerMovieCard}:hover & {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #000;
    top: 0.5rem;
    left: 3.5rem;
    border: 4px solid rgba(255, 224, 0, 1);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const MovieAverage = styled.p`
  display: none;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  ${ContainerMovieCard}:hover & {
    display: block;
    color: rgba(255, 224, 0, 1);
    font-size: 25px;
  }
  
`;

export const SectionTitle = styled.div`
  position: relative;

  &:hover .movie-title {
    opacity: 1;
  }
`;

export const MovieTitle = styled.h3`
  margin: 0;
  padding: 0.5rem;
  color: white;
  width: 100%;
  box-sizing: border-box;
`;

export const SectionTextMovie = styled.div`
  border: 1px solid red;
  display: flex;
`;

export const SectionDescription = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7rem;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const MovieDescription = styled.p`
  color: #000;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 460px;
  }
  @media screen and (max-width: 480px) {
    width: 380px;
  }
`;

export const MovieYear = styled.p`
  color: #000;
  margin-left: 7rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;

// export const SectionGenre = styled.div`
//   &>a{
//     border: 1px solid red;
//   }
//   &:hover {
//   display: flex;
//   align-items: center;
//   height: 10%;
//   width: 100%;
//   margin-left: 1rem;
//   }
//   border: 1px solid red;
  
// `;

export const MovieGenreContainer = styled.div`
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  ${ContainerMovieCard}:hover & {
    height: auto; 
  }
`;

export const MovieGenre = styled.div`
  opacity: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 90px;
  transition: opacity 0.3s ease-in-out;
  margin-top: -3.5rem;

  ${ContainerMovieCard}:hover & {
    opacity: 1;
    margin-top: 0;
  }
`;


export const Genre = styled.p`
  width: 53px;
  height: 16px;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 15.6px;
  color: #B4B4B4; 
  
`;
