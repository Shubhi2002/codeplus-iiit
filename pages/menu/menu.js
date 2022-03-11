import Link from "next/link";
import styles from './menu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopyright,
  } from "@fortawesome/free-solid-svg-icons";
export default function Menubar(){
    return(
        <div className={styles.menubox}>
            <div className={styles.logo}>CodePlus</div>
            <div>
            <button className={styles.menubutton}><Link href="./"><div className={styles.menucontent}>Announcement</div></Link></button>
            <button className={styles.menubutton}><Link href="./topbar/topbar"><div className={styles.menucontent}>Todo-List</div></Link></button>
            <button className={styles.menubutton}><Link href="./topbar/topbar"><div className={styles.menucontent}>Discussions</div></Link></button>
            <button className={styles.menubutton}><Link href="./topbar/topbar"><div className={styles.menucontent}>Girls Community</div></Link></button>
            <button className={styles.menubutton}><Link href="./topbar/topbar"><div className={styles.menucontent}>Leaderboard</div></Link></button>
            <button className={styles.menubutton}><Link href="./topbar/topbar"><div className={styles.menucontent}>Lockout</div></Link></button>
            </div>
            <div className={styles.footer} >
            <div></div>
            <FontAwesomeIcon
              icon={faCopyright}
              style={styles.iconi}
              />
              <span>Developed by old freshers</span>
            </div>
        
        </div>
    );
}