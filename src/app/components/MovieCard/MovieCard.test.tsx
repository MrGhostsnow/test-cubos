// MovieCard.test.jsx

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieCard from "../MovieCard/index";

const mockSuccessResponse = {
  genres: [{ id: 1, name: "Action" }],
};

const mockJsonPromise = Promise.resolve(mockSuccessResponse);

const mockFetchPromise = Promise.resolve({
  ok: true,
  json: () => mockJsonPromise,
});

global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

const mockMovie = {
  id: 123,
  title: "Example Movie",
  overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  genres: [{ id: 1, name: "Action" }],
  genre_ids: [1],
  status: "Released",
  original_language: "en",
  runtime: 120,
  budget: 1000000,
  revenue: 2000000,
  vote_average: 7.5,
  release_date: "2022-01-01",
  poster_path: "/example-poster.jpg",
};

describe("MovieCard component", () => {
  it("renders correctly", async () => {
    render(<MovieCard movie={mockMovie} />);

    // Aguarde a resolução das promessas do useEffect
    await waitFor(() => {
      expect(screen.getByAltText(/Example Movie/i)).toBeInTheDocument();
      expect(screen.getByText(/Example Movie/i)).toBeInTheDocument();
      expect(screen.getByText(/75%/i)).toBeInTheDocument();
      expect(screen.getByText(`31/12/2021`)).toBeInTheDocument(); // Ajuste a expectativa aqui
      expect(
        screen.getByText(
          /Lorem ipsum dolor sit amet, consectetur adipiscing elit./i
        )
      ).toBeInTheDocument();
      expect(screen.getByText(/Action/i)).toBeInTheDocument();
    });
  });
});
