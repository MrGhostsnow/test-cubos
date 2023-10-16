"use client";
import styled from "styled-components";

export const ContainerMovieCard = styled.div`
  width: 1200px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 700px;
    width: 900px;
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
    justify-content: space-between;
    height: 1200px;
  }
`;

export const MoviePoster = styled.img`
  max-height: 500px;
  width: 350px;
  color: #000;
  margin-top: -2rem;
  @media screen and (max-width: 1024px) {
    width: 280px;
    height: 350px;
    margin-bottom: 2rem;
  }
`;

export const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4.1rem;
  @media screen and (max-width: 1024px) {
    height: 730px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const SectionMovieAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #000;
  top: -2rem;
  left: 52rem;
  border: 4px solid #2fe4ed;
  border-radius: 50%;
  width: 125px;
  height: 130px;
  background-color: #1f75cb;
  @media screen and (max-width: 1024px) {
    left: 26rem;
  }
  @media screen and (max-width: 768px) {
    left: 20rem;
  }
  @media screen and (max-width: 480px) {
    left: 7rem;
    top: 1rem;
  }
`;

export const MovieAverage = styled.p`
  color: #2fe4ed;
  font-size: 35px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 990px;
  @media screen and (max-width: 768px) {
    width: 700px;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

export const MovieTitle = styled.h1`
  color: #1f75cb;
  font-size: 35px;
  margin-left: 9rem;
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
  }
`;

export const SectionTextMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 750px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

export const MovieDescription = styled.p`
  color: #000;
  width: 70%;
  border-top: 1px solid #2fe4ed;
  padding-top: 1rem;
  text-align: left;
`;

export const MovieYear = styled.p`
  color: #000;
  position: relative;
  right: -15rem;
  top: -2rem;
  width: 100px;
  @media screen and (max-width: 480px) {
    right: -12.5rem;
  }
`;

export const SectionGenre = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 9rem;
  height: 50%;
  width: 70%;
  margin-top: 3rem;
  @media screen and (max-width: 480px) {
    width: 300px;
    justify-content: center;
    margin-left: 3.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
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
  margin-bottom: -1rem;
`;

export const ContainerTitle = styled.p`
  color: #1f75cb;
  font-size: 30px;
  text-align: left;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const SectionMoreInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: left;
  margin-top: 1.5rem;
  @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
    flex-wrap: wrap;
  }
`;

export const SectionMovieInfos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-top: 1px solid #2fe4ed;
  width: 70%;
  text-align: left;
  @media screen and (max-width: 480px) {
    justify-content: space-between;
    padding: 0.5rem;
  }
`;

export const SectionLabelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  text-align: left;
  @media screen and (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export const TitleMoreInfos = styled.p`
  color: #1f75cb;
  font-size: 30px;
  text-align: left;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const MovieStatus = styled.p`
  color: #000;
`;

export const MovieRuntime = styled.p`
  color: #000;
`;

export const MovieBudget = styled.p`
  color: #000;
`;

export const MovieLanguage = styled.p`
  color: #000;
`;

export const MovieRevenue = styled.p`
  color: #000;
  font-size: 15px;
`;

export const Label = styled.p`
  color: #1f75cb;
  font-size: 18px;
`;

export const SectionPosterAndDate = styled.div`
  display: flex;
  flex-direction: column;
`;
