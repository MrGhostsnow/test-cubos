"use client";
import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #121113;
`;

export const ContainerNavBar = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: center;
  background-color: #1f75cb;
  @media screen and (max-width: 480px) {
    margin-bottom: 12rem;
  }
`;

export const Title = styled.h1`
  color: #2fe4ed;
  cursor: pointer;
`;
