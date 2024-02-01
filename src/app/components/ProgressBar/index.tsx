import React from "react";
import { CircleWrapper, Percentage } from "./styles";

interface CircleProps {
  percentage: string;
}

const Circle: React.FC<CircleProps> = ({ percentage }) => {
  return (
    <CircleWrapper>
      <Percentage>{percentage}</Percentage>
    </CircleWrapper>
  );
};

export default Circle;
