"use client";
import styled from "styled-components";

export const ContainerSearchBar = styled.div`
  margin-top: 5rem;
  height: 100px;
  margin-left: 4rem; 

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: -5rem;
    margin-bottom: 1rem;
  }
`;

export const InputSearch = styled.input`
  width: 480px;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #49474E;
  color: #1f75cb;
  padding: 16px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  position: relative;
  right: 45px;
  top: 6px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    right: -165px;
    top: -55px;
  }

  @media screen and (max-width: 480px) {
    right: -80px;
  }
`;
