import styles from "./announce.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import Post from "./Post";
export default function Announce() {
  return (
    <div>
      <div className={styles.container}>
        <h3>Title: </h3>
        <p>dfjsksdfkjslkfjkfjakl</p>
        <hr className={styles.line}></hr>
        <div className={styles.postedBy}>
          <div>
            <span style={{ marginLeft: "10px" }}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </span>{" "}
            <span style={{ marginLeft: "8px" }}>Posted by</span> name{" "}
            <span>at</span>
            <span className={styles.time}>date&time</span>
          </div>
          <FontAwesomeIcon
            icon={faComment}
            className={styles.icon}
            style={{ fontSize: 15, color: "black", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={styles.container}>
        <h3>Title: </h3>
        <p>dfjsksdfkjslkfjkfjakl</p>
        <hr className={styles.line}></hr>
        <div className={styles.postedBy}>
          <div>
            <span style={{ marginLeft: "10px" }}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </span>{" "}
            <span style={{ marginLeft: "8px" }}>Posted by</span> name{" "}
            <span>at</span>
            <span className={styles.time}>date&time</span>
          </div>
          <FontAwesomeIcon
            icon={faComment}
            className={styles.icon}
            style={{ fontSize: 15, color: "black", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={styles.container}>
        <h3>Title: </h3>
        <p>dfjsksdfkjslkfjkfjakl</p>
        <hr className={styles.line}></hr>
        <div className={styles.postedBy}>
          <div>
            <span style={{ marginLeft: "10px" }}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </span>{" "}
            <span style={{ marginLeft: "8px" }}>Posted by</span> name{" "}
            <span>at</span>
            <span className={styles.time}>date&time</span>
          </div>
          <FontAwesomeIcon
            icon={faComment}
            className={styles.icon}
            style={{ fontSize: 15, color: "black", cursor: "pointer" }}
          />
        </div>
      </div>
      <Post/>
    </div>
  );
}
