"use client";
import styled from "styled-components";

export const ContainerSearchBar = styled.div`
  margin-top: 5rem;
  height: 100px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  }
`;

export const InputSearch = styled.input`
  width: 550px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #1f75cb;
  padding-left: 10px;
  &:focus {
    outline: none;
    border-color: #1f75cb;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #1f75cb;
  cursor: pointer;
  &:hover {
    background-color: #1f75cb;
    color: #fff;
  }
  margin-left: 10px;
`;
