'use client';
import styled, { css } from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
  padding: 24px;
  gap: 12px;
`;

export const ButtonPagination = styled.button<{ active: string | undefined }>`
  background-color: #8E4EC6;
  color: #EAE6FD;
  border: none;
  font-size: 16px;
  padding: 12px 16px;
  margin: 2px;
  cursor: pointer;
  border-radius: 4px;

  ${(props) =>
    props.active &&
    css`
      background-color: #323035;
      border-radius: 4px;
      border: 1px solid #323035;
      font-weight: 400;
    `}
`;
