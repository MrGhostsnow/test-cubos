import HomePage from "./components/Home";
import NavBar from "./components/NavBar";
import { ContainerMain, ContainerNavBar, Title } from "./styles";
import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerNavBar}>
        <Link href="/">
          <p className={styles.title}>Movies</p>
        </Link>
      </div>
      {/* <NavBar /> */}
      <HomePage />
    </div>
  );
}
