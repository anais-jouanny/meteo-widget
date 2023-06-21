import Link from "next/link";
import navbarStyles from "../modules/Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={navbarStyles.list}>
      <li>
        <Link href="/">Aujourd&apos;hui</Link>
      </li>
      <li>|</li>
      <li>
        <Link href="/hours">Par heure</Link>
      </li>
      <li>|</li>
      <li>
        <Link href="/next">15 jours</Link>
      </li>
      <li>|</li>
      <li>
        <Link href="/add-city">Ajouter une ville</Link>
      </li>
    </ul>
  );
};

export default Navbar;
