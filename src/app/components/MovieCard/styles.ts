"use client";
import styled from "styled-components";

export const ContainerMovieCard = styled.div`
  width: 1200px;
  height: 330px;
  margin-top: 20px;
  display: flex;
  background-color: #ececef;

  @media screen and (max-width: 1024px) {
    width: 950px;
  }

  @media screen and (max-width: 768px) {
    width: 700px;
  }

  @media screen and (max-width: 480px) {
    width: 400px;
    justify-content: center;
  }
`;

export const MoviePoster = styled.img`
  max-height: 330px;
  width: 300px;
  color: #000;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4.1rem;
`;

export const SectionMovieAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #000;
  top: 5.5rem;
  left: 1.5rem;
  border: 4px solid #2fe4ed;
  border-radius: 50%;
  width: 70px;
  height: 100px;
  background-color: #1f75cb;

  @media screen and (max-width: 768px) {
    left: 25rem;
    top: 7rem;
  }
  @media screen and (max-width: 480px) {
    left: 18rem;
  }
`;

export const MovieAverage = styled.p`
  color: #2fe4ed;
  font-size: 25px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f75cb;
  height: 80px;
  width: 980px;
  @media screen and (max-width: 1024px) {
    width: 730px;
  }
  @media screen and (max-width: 768px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

export const MovieTitle = styled.h1`
  color: #2fe4ed;
  font-size: 35px;
  margin-left: 7rem;

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const SectionTextMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
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

export const SectionGenre = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7rem;
  height: 10%;
  width: 70%;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 480px) {
    width: 380px;
  }
`;

export const MovieGenre = styled.p`
  color: #000;
`;

export const Genre = styled.span`
  background-color: #fff;
  color: #1f75cb;
  border: 1px solid #1f75cb;
  padding: 4px;
  margin-right: 5px;
  border-radius: 12px;
`;
