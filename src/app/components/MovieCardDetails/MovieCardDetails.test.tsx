// MovieCardDetails.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieCardDetails from "../MovieCardDetails/index";

// Mock fetch para evitar chamadas reais à API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [], total_results: 0 }),
    ok: true,
    headers: {
      get: () => "application/json",
    },
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "",
  } as unknown as Response)
);

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

describe("MovieCardDetails component", () => {
  it("renders correctly", async () => {
    render(<MovieCardDetails movie={mockMovie} />);

    expect(screen.getByText(/Example Movie/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Situação/i)).toBeInTheDocument();
      expect(screen.getByText(/Idioma/i)).toBeInTheDocument();
      expect(screen.getByText(/Duração/i)).toBeInTheDocument();
      expect(screen.getByText(/Orcamento/i)).toBeInTheDocument();
      expect(screen.getByText(/Lucro/i)).toBeInTheDocument();
    });
  });
});
