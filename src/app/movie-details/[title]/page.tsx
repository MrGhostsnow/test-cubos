"use client";
import { useSearchParams } from "next/navigation";

const MovieDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  console.log(title);

  return (
    <div>
      <h1 style={{ color: "red" }}>Detalhes do Filme</h1>
      <p style={{ color: "blue" }}>ID do Filme: {title}</p>
    </div>
  );
};

export default MovieDetails;
