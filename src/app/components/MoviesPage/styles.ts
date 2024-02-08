"use client";
import styled from "styled-components";

export const ContainerMoviesPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 10rem;
  padding-bottom: 10rem;
`;

export const SectionMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 3rem;
  padding: 3rem;
  width: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
