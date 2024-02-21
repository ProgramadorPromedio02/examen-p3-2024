import styles from "../styles/CardForm.module.css";

export default function CardForm({ content }) {
  return (
    <>
      <div className={styles["custom-card"]}>
        <div className={styles["bg"]}>{content} </div>
        <div className={styles["blob"]}></div>
      </div>
           
    </>
  );
}
