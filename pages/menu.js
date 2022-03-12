import Link from "next/link";
import styles from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faBullhorn, faClipboardCheck, faMessage, faVenus, faSquarePollVertical, faUserGroup} from "@fortawesome/free-solid-svg-icons";
export default function Menubar() {
  return (
    <div className={styles.menubox}>
      <div className={styles.logo}>CodePlus</div>
      <div>
        <button className={styles.menubutton}>
          <Link href="./">
            <div className={styles.menucontent}><span style={{marginRight:"20px"}}><FontAwesomeIcon icon={faBullhorn} className={styles.icon} /></span>Announcement</div>
            
          </Link>
        </button>
        <button className={styles.menubutton}>
          <Link href="./Questions">
            <div className={styles.menucontent}><span style={{marginRight:"20px"}}><FontAwesomeIcon icon={faClipboardCheck} className={styles.icon} /></span>Todo-List</div>
          </Link>
        </button>
        <button className={styles.menubutton}>
          <Link href="./Discussions">
            <div className={styles.menucontent}><span style={{marginRight:"20px"}}><FontAwesomeIcon icon={faMessage} className={styles.icon} /></span>Discussions</div>
          </Link>
        </button>
        <button className={styles.menubutton}>
          <Link href="./WomenCommunity/womenDes">
            <div className={styles.menucontent}><span style={{marginRight:"20px"}}><FontAwesomeIcon icon={faVenus} className={styles.icon} /></span>Girls Community</div>
          </Link>
        </button>
        <button className={styles.menubutton}>
          <Link href="./Leaderboard">
            <div className={styles.menucontent}><span style={{marginRight:"20px"}}><FontAwesomeIcon icon={faSquarePollVertical} className={styles.icon} /></span>Leaderboard</div>
          </Link>
        </button>
        <button className={styles.menubutton}>
          <Link href="./topbar/topbar">
            <div className={styles.menucontent}><span style={{marginRight:"20px"}}><FontAwesomeIcon icon={faUserGroup} className={styles.icon} /></span>Lockout</div>
          </Link>
        </button>
      </div>
      <div className={styles.footer}>
        <div></div>
        <FontAwesomeIcon icon={faCopyright} className={styles.iconi} />
        <span className={styles.span}>Developed by old freshers</span>
      </div>
    </div>
  );
}
