"use client";
import styled from "styled-components";

export const ContainerSearchBar = styled.div`
  margin-top: 5rem;
  height: 100px;
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
`;
