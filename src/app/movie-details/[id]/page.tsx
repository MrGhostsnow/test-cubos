"use client";
import { ContainerMovieDetails, ContainerCard } from "./styles";
import MovieCardDetails from "@/app/components/MovieCardDetails";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IMovie } from "@/app/interfaces/MovieInterface";
import NavBar from "@/app/components/NavBar";

const MovieDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [movieDetails, setMovieDetails] = useState<IMovie | null>();
  const [movieVideos, setMovieVideos] = useState<any[]>([]);
  const apiKey = "b716e119325a7aeeeff2782636710df3";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?include_adult=false&language=pt-BR&page=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMovieDetails(data);
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
