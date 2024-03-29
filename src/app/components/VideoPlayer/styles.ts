"use client";
import styled from "styled-components";

export const SectionVideoPlayer = styled.iframe`
  width: 1600px;
  height: 700px;

  @media screen and (max-width: 1440px) {
    width: 1200px;
  }
  @media screen and (max-width: 1024px) {
    width: 900px;
    height: 500px;
  }
  @media screen and (max-width: 768px) {
    width: 700px;
    height: 400px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
    height: 200px;
  }
`;
