import headerStyles from "../modules/Header.module.css";
import Navbar from "./Navbar";
import sun from "../public/sunny.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        <Link href="/" aria-label="logo météo">
          Mété
          <Image
            aria-hidden="true"
            src={sun}
            loading="lazy"
            alt="sun-icon"
            className={headerStyles.sun}
          />
          h
        </Link>
      </h1>
      <Navbar />
    </div>
  );
};

export default Header;
