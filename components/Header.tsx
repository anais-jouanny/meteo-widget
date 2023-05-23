import headerStyles from "../modules/Header.module.css";
import Navbar from "./Navbar";
import sun from "../public/sunny.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        Mété
        <Image
          src={sun}
          loading="lazy"
          alt="sun-icon"
          className={headerStyles.sun}
        />
        h
      </h1>
      <Navbar />
    </div>
  );
};

export default Header;
