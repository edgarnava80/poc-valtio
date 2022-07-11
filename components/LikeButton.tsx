import store from "../store/store";
import styles from "../styles/Home.module.css";

const LikeButton = () => {
    return (
        <p onClick={() => store.likes += 1} className={styles.card}>
            Click here to like
        </p>
    )
}

export default LikeButton;