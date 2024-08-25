import Card from "./Card.jsx";
import styles from "./content.module.css";
import data from "../data.jsx";

export default function Content() {
  const location = data.map((item) => <Card key={item.id} {...item} />);
  console.log(location);
  return (
    <div className={styles.hero}>
      <div className={styles.heroTwo}>
        <div className={styles.contentContainer}>{location}</div>;
      </div>
    </div>
  );
}
