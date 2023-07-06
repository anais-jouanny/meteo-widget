import Link from "next/link";
import manageCitiesStyles from "../modules/ManageCities.module.css";

const ManageCities = () => {
  return (
    <ul className={manageCitiesStyles.list}>
      <Link href="/add-city">
        <li className={manageCitiesStyles.listItem}>Ajouter une ville</li>
      </Link>

      <Link href="/delete-city">
        <li className={manageCitiesStyles.listItem}>Supprimer une ville</li>
      </Link>
    </ul>
  );
};

export default ManageCities;
