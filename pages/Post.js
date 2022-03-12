import styles from "./Post.module.css"
export default function Post(){
    return(
        <div className={styles.post}>
            <form>
                <label for="title">Title:</label>
                <input id="title"></input>
                <label for="content">Content:</label>
                <input id="content"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}