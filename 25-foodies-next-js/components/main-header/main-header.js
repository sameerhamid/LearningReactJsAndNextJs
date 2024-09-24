import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import Navlink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on table" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
