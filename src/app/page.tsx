import HomePage from "./components/Home";
import NavBar from "./components/NavBar";
import { ContainerMain } from "./styles";

export default function Home() {
  return (
    <ContainerMain>
      <NavBar />
      <HomePage />
    </ContainerMain>
  );
}
