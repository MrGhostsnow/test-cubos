"use client";
import styled from "styled-components";

export const ContainerMovieCard = styled.div`
  width: 1200px;
  height: 330px;
  margin-top: 20px;
  display: flex;
  background-color: #ececef;
`;

export const MoviePoster = styled.img`
  max-height: 330px;
  width: 300px;
  color: #000;
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
`;

export const MovieTitle = styled.h1`
  color: #2fe4ed;
  font-size: 35px;
  margin-left: 7rem;
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
`;

export const MovieDescription = styled.p`
  color: #000;
  width: 70%;
`;

export const MovieYear = styled.p`
  color: #000;
  margin-left: 7rem;
`;

export const SectionGenre = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7rem;
  height: 10%;
  width: 70%;
  margin-bottom: 2rem;
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
