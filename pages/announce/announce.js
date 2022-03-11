import styles from './announce.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
  } from "@fortawesome/free-solid-svg-icons";
export default function Announce(){
    return(
        <div>
            <div className={styles.container}>
                <h3>Title: </h3>
                <p>dfjsksdfkjslkfjkfjakl</p>
                <hr className={styles.line}></hr>
                <div className={styles.postedBy}>
                    <div>logo <span>Posted by</span> name <span>at</span><span className={styles.time}>date&time</span></div>
                         <FontAwesomeIcon
                          icon={faComment}
                          style={{ fontSize: 15, color: "black",cursor:"pointer",}}
                    />
                </div>
                
            </div>   
            <div className={styles.container}>
                <h3>Title: </h3>
                <p>dfjsksdfkjslkfjkfjakl</p>
                <hr></hr>
                <div className={styles.postedBy}>
                    <div>logo <span>Posted by</span> name <span>at</span><span className={styles.time}>date&time</span></div>
                    
                         <FontAwesomeIcon
                          icon={faComment}
                          style={{ fontSize: 15, color: "black",cursor:"pointer",}}
                    />
                </div>
                
            </div>   
            <div className={styles.container}>
                <h3>Title: </h3>
                <p>dfjsksdfkjslkfjkfjakl</p>
                <hr></hr>
                <div className={styles.postedBy}>
                    <div>logo <span>Posted by</span> name <span>at</span><span className={styles.time}>date&time</span></div>
                     
                         <FontAwesomeIcon
                          icon={faComment}
                          style={{ fontSize: 15, color: "black",cursor:"pointer",}}
                    />
                </div>
                
            </div>   
        </div>
    );
}