"use client";
import styled from "styled-components";

export const ContainerNavBar = styled.div`
display: flex;
width: 100%;
height: 90px;
align-items: center;
border-bottom: 1px solid #F1E6FD;
background-color: #121113;
@media screen and (max-width: 480px) {
  margin-bottom: 12rem;
}
`;

export const Title = styled.h1`
color: white;
font-size: 30px;
font-weight: bold;
cursor: pointer;
margin-left: 1rem;
`;
