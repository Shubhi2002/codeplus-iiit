
import styles from '../styles/Home.module.css'
import { useState, } from 'react'
import ContestReminder from './contestReminder'
import Menubar from './menu'
import Leaderboard from './sideLeaderboard'
import Topbar from './topbar'
import Announce from './announce'
import style from './Account/Account.module.css'
import Login from './Account/login'
import Signup from './Account/signup'
import { useRouter } from "next/router";
export default function Home() {
  const [isloggedIn,Changelog]=useState(true);
  const router=useRouter()
  
  return (
    /*
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
    </div>*/
    <div className={style.outer}>
      <div className={style.codeplus}>
        <h1>CodePlus</h1>
        <p className={style.p}>jjhkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhgftrdeswasedrftgyhjk</p>
      </div>
      <div className={style.account}>
        <div className={style.btn}>
          <div></div>
          <button className={style.Signup}  onClick={handleSignup}>Sign Up</button>
        <button className={style.Login}>Log In</button></div>
        {isloggedIn? <Login />:<Signup/>}
      </div>
    </div>
  )
}
