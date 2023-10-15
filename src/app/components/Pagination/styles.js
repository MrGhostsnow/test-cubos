"use client";
import styled from "styled-components";
import { css } from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
`;

export const ButtonPagination = styled.button`
  background-color: #fff;
  color: #2fe4ed;
  border: none;
  font-size: 24px;
  padding: 12px 16px;
  margin: 2px;
  cursor: pointer;
  /* Outros estilos básicos para botões de página */

  ${(props) =>
    props.active &&
    css`
      background-color: #1f75cb;
      border-radius: 50%;
      border: 4px solid #2fe4ed;
      font-weight: bold;
    `}

  &:hover {
    background-color: #f0f0f0; /* Cor de fundo leve ao passar o mouse (opcional) */
  }
`;
