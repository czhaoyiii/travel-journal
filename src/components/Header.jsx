import headerLogo from "../assets/icons/header-logo.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={headerLogo} alt="" className={styles.headerLogo} />
      <h1 className={styles.headerTitle}>my travel journal.</h1>
    </div>
  );
}
