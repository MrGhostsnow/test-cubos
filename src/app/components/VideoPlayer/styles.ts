"use client";
import styled from "styled-components";

export const SectionVideoPlayer = styled.iframe`
  width: 1200px;
  height: 500px;
  @media screen and (max-width: 1024px) {
    width: 900px;
  }
  @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;
