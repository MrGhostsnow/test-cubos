import React from "react";
import { ContainerHome } from "./styles";
import MoviesPage from "../MoviesPage";
import { MoviesProvider } from "@/app/services/moviesContext";

const HomePage = () => {
  return (
    <ContainerHome>
      <MoviesProvider>
        <MoviesPage />
      </MoviesProvider>
    </ContainerHome>
  );
};

export default HomePage;
