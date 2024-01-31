import React from "react";
import { ContainerNavBar, Title } from "./styles";
import Link from "next/link";
import { useMovies } from "@/app/services/moviesContext";

const NavBar = () => {
  return (
    <ContainerNavBar>
      <Link href="/">
        <Title>Movies</Title>
      </Link>
    </ContainerNavBar>
  );
};

export default NavBar;
