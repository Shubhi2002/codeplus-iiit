
import styles from '../styles/Home.module.css'
import ContestReminder from './contestReminder'
import Menubar from './menu'
import Leaderboard from './sideLeaderboard'
import Topbar from './topbar'
import Announce from './announce'
export default function Home() {
  return (
    <div className={styles.app}>
      <Menubar/>
      <div className={styles.part1}>
        <Topbar/>
        <div className={styles.part2}>
          <Announce/>
          <div className={styles.part3}>
            <ContestReminder/>
            <Leaderboard/> 
          </div>          
        </div>
      </div>
    </div>
  )
}
