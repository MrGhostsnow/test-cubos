"use client";
import HomePage from "./components/Home";
import NavBar from "./components/NavBar";
import { ContainerMain, ContainerNavBar, Title } from "./styles";
import { useMovies } from "./services/moviesContext";
import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  const { movies, setMovies } = useMovies();

  const fetchFirstPage = () => {
    setMovies([]);
  };

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerNavBar}>
        <Link href="/" onClick={fetchFirstPage}>
          <p className={styles.title}>Movies</p>
        </Link>
      </div>
      {/* <NavBar /> */}
      <HomePage />
    </div>
  );
}
