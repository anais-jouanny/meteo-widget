import Link from "next/link";
import navbarStyles from "../modules/Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={navbarStyles.list}>
      <li>
        <Link href="/" aria-label="météo du jour">
          Aujourd&apos;hui
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link href="/hours" aria-label="météo par heure">
          Par heure
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link href="/next" aria-label="météo des prochains jours">
          15 jours
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link href="/manage-cities">Gérer les villes</Link>
      </li>
    </ul>
  );
};

export default Navbar;
