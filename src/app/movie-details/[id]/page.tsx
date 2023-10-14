"use client";
import { ContainerMovieDetails, ContainerCard } from "./styles";
import MovieCardDetails from "@/app/components/MovieCardDetails";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar";

interface IGenre {
  name: string;
}

interface IMovie {
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  budget: number;
  original_language: string;
  revenue: number;
  runtime: number;
  status: string;
  genres: IGenre[];
}

const MovieDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [movieDetails, setMovieDetails] = useState<IMovie | null>();
  const apiKey = "b716e119325a7aeeeff2782636710df3";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?include_adult=false&language=pt-BR&page=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMovieDetails(data);
          console.log(data);
        } else {
          setMovieDetails(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setMovieDetails(null);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <NavBar />
      <ContainerMovieDetails>
        <ContainerCard>
          <MovieCardDetails movie={movieDetails} />
        </ContainerCard>
      </ContainerMovieDetails>
    </>
  );
};

export default MovieDetails;
