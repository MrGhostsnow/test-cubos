import { ContainerNavBar, Title } from "./styles";
import Link from "next/link";

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
