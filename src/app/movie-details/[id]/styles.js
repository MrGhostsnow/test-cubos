"use client";
import styled from "styled-components";

export const ContainerMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1500px;
  background-color: #121113;

  @media screen and (max-width: 768px) {
    height: 2700px;
  }

  @media screen and (max-width: 425px) {
    height: 2000px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 2700px;
  }

  @media screen and (max-width: 425px) {
    height: 2500px;
  }
`;
