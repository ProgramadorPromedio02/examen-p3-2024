import styles from "../styles/ErrorDesigne.module.css";
import svg from "../img/ERROR.svg";
import { Link } from "react-router-dom";

function ScreenError() {
  return (
    <>
    <div className={ `${styles['container']}` }>
      <img className={styles["custom-img"]} src={svg} alt="ERROR DE LA PÁGINA"/>
      <Link to="/" >
        <button className="btn btn-primary">VOLVER</button>
      </Link>
    </div>      
    </>
  );
};

export default ScreenError;
