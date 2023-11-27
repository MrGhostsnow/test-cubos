// Importe as bibliotecas de teste necessárias
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../NavBar/index";

describe("NavBar component", () => {
  it("renders correctly", () => {
    render(<NavBar />);
    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
  });
});
