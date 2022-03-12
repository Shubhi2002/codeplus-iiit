import styles from "./topbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div></div>
      <h1>Indian Institute Of Information Technology, Allahabad</h1>
      <FontAwesomeIcon icon={faBell} className={styles.icon} />
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </div>
  );
}