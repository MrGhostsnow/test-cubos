"use client";
import { ContainerHome } from "./styles";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import MoviesPage from "../MoviesPage";

const HomePage = () => {
  return (
    <ContainerHome>
      <NavBar />
      <SearchBar />
      <MoviesPage />
    </ContainerHome>
  );
};

export default HomePage;
