import Link from "next/link";
import manageCitiesStyles from "../../modules/ManageCities.module.css";

const ManageCities = () => {
  return (
    <ul className={manageCitiesStyles.list}>
      <Link href="manage-cities/add-city">
        <li className={manageCitiesStyles.listItem}>Ajouter une ville</li>
      </Link>

      <Link href="manage-cities/delete-city">
        <li className={manageCitiesStyles.listItem}>Supprimer une ville</li>
      </Link>
    </ul>
  );
};

export default ManageCities;
