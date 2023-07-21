import Link from "next/link";
import navbarStyles from "../modules/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const menu = [
    { title: "Aujourd'hui", path: "/" },
    { title: "Par heure", path: "/hours" },
    { title: "Gérer les villes", path: "/manage-cities" },
  ];

  let currentPath = router.pathname.split("/");
  currentPath.splice(0, 1, "/");
  currentPath.splice(2);

  const clearedPath = currentPath[0].concat(currentPath[1]);

  return (
    <ul className={navbarStyles.list}>
      {menu.map((item) => {
        const css = item.path === clearedPath ? navbarStyles.currentLink : "";

        return (
          <li key={item.path} className={navbarStyles.item}>
            <Link href={item.path} className={css}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
