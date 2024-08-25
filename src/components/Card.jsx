import styles from "./card.module.css";
import marker from "../assets/icons/marker.svg";

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={[props.imageUrl]} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.locationContainer}>
          <img src={marker} alt="" />
          <h3 className={styles.locationCountry}>{props.location}</h3>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p
          className={styles.cardDate}
        >{`${props.startDate} - ${props.endDate}`}</p>
        <p className={styles.cardDes}>{props.description}</p>
      </div>
    </div>
  );
}
