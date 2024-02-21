// Footer.js

import { Image } from "react-bootstrap";
import logo from "../img/Logotipo(Gonzalof).png";
import styles from "../styles/FooterDesigne.module.css";

function Footer() {
  return (
    <footer
      className={`${styles["seccion-oscura"]} d-flex flex-column align-items-center justify-content-center`}
    >
      <Image
        src={logo}
        alt="Mi Logotipo"
        className={styles["logo-dimensiones"]}
      />
      <p className={styles["derechos-de-autor"]}>
        TODOS LOS DERECHOS RESERVADOS ME PERTENECEN &copy;{" "}
        {new Date().getFullYear()}
      </p>
      <div
        className={`${styles["iconos-redes-sociales"]} d-flex flex-wrap align-items-center justify-content-center `}
      >
        <a
          href="https://twitter.com/GomuDulce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          href="https://www.instagram.com/gomudulce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC5d6NPxBvQqoqqYfprCD-Pg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-youtube"></i>
        </a>
        <a
          href="https://github.com/ProgramadorPromedio02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="mailto:t3t34ge4awrfawqnfhnedr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
