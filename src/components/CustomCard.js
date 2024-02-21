// CustomCard.js

import styles from "../styles/CustomCard.module.css";

export default function CustomCard({ content }) {
  return (
    <>
      <div className={styles["custom-card"]}>
        <div className={styles["bg"]}>{content}</div>
        <div className={styles["blob"]}></div>
      </div>
    </>
  );
}
