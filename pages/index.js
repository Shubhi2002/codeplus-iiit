
import styles from '../styles/Home.module.css'
import ContestReminder from './contestReminder/contestReminder'
import Menubar from './menu/menu'
import Leaderboard from './sideLeaderboard/sideLeaderboard'
import Topbar from './topbar/topbar'
import Question from './Questions/Questions'
export default function Home() {
  return (
    <div className={styles.app}>
      <Menubar/>
      <div className={styles.part1}>
        <Topbar/>
        <div className={styles.part2}>
          <Question/>
          <div className={styles.part3}>
            <ContestReminder/>
            <Leaderboard/> 
          </div>          
        </div>
      </div>
    </div>
  )
}
