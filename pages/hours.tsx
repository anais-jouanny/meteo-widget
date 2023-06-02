import hoursStyles from "../modules/Hours.module.css";

const byHours = () => {
  // API Key
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  // récupérer tableau ville depuis context
  // créer un state local avec la météo pour chaque ville
  // dans useEffect au 1er rendu : récupérer data par heure

  return (
    <div className={hoursStyles.container}>
      <ul>
        <li>BLABLA</li>
      </ul>
    </div>
  );
};

export default byHours;
