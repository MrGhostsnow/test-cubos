"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { IMovie } from "@/app/interfaces/MovieInterface";

interface MoviesContextProps {
  children: ReactNode;
}

interface MoviesContextData {
  movies: IMovie[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchMovie: string;
  setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
  searchResult: IMovie[];
  setSearchResult: React.Dispatch<React.SetStateAction<IMovie[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export const MoviesProvider: React.FC<MoviesContextProps> = ({ children }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        searchMovie,
        setSearchMovie,
        searchResult,
        setSearchResult,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = (): MoviesContextData => {
  return useContext(MoviesContext);
};
