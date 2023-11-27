import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar/index";

describe("SearchBar component", () => {
  it("renders correctly", () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(
      screen.getByPlaceholderText(/Busque um filme por nome, ano ou gênero.../i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Pesquisar/i })
    ).toBeInTheDocument();
  });

  it("calls onSearch correctly", () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    fireEvent.change(
      screen.getByPlaceholderText(
        /Busque um filme por nome, ano ou gênero.../i
      ),
      {
        target: { value: "Avengers" },
      }
    );

    fireEvent.click(screen.getByRole("button", { name: /Pesquisar/i }));

    expect(mockOnSearch).toHaveBeenCalledWith("Avengers");
  });
});
