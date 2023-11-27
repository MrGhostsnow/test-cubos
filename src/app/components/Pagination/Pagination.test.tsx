import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./index";

describe("Pagination component", () => {
  it("renders correctly", () => {
    const currentPage = 2;
    const totalPages = 5;

    const mockOnPageChange = jest.fn();

    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons).toHaveLength(totalPages);

    expect(
      screen.getByRole("button", { name: currentPage.toString() })
    ).toHaveAttribute("active", "true");
  });

  it("calls onPageChange correctly", () => {
    const currentPage = 3;
    const totalPages = 7;

    const mockOnPageChange = jest.fn();

    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: "4" }));

    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });
});
