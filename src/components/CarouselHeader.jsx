// CarouselHeader.js
import { Carousel } from "react-bootstrap";
import styles from "../styles/CarouselHeader.module.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";

function CarouselHeader() {
  return (
    <Carousel className={styles["carousel"]} fade>
      <Carousel.Item>
        <img className={styles["image"]} src={img1} alt="Aprende React" />
        <Carousel.Caption>
          <a
            className={styles["button"]}
            href="https://www.youtube.com/watch?v=6Jfk8ic3KVk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles["title"]}>Aprende React</h3>
            <p className={styles["text"]}>
              Una de las librerías más importantes de JavaScript.
            </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img2} alt="Aprende Python" />
        <Carousel.Caption>
          <a
            className={styles["button"]}
            href="https://www.youtube.com/watch?v=DLikpfc64cA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles["title"]}>Aprende Python</h3>
            <p className={styles["text"]}>
              Uno de los lenguajes más usados para la ciencia de datos.
            </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img3} alt="Aprende Bootstrap" />
        <Carousel.Caption>
          <a
            className={styles["button"]}
            href="https://www.youtube.com/watch?v=DLikpfc64cA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles["title"]}>Aprende Bootstrap</h3>
            <p className={styles["text"]}>
              Un Framework para desarrollar sitios web adaptables (responsivos).
            </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img4} alt="Aprende HTML Y CSS" />
        <Carousel.Caption>
          <a
            className={styles["button"]}
            href="https://www.youtube.com/watch?v=XqFR2lqBYPs&t=128s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles["title"]}>Aprende HTML Y CSS</h3>
            <p className={styles["text"]}>
              Lenguaje utilizado para estructurar y estilizar.
            </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img5} alt="Aprende JavaScript" />
        <Carousel.Caption>
          <a
            className={styles["button"]}
            href="https://www.youtube.com/watch?v=ivdTnPl1ND0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles["title"]}>Aprende JavaScript</h3>
            <p className={styles["text"]}>
              Lenguaje de programación de alto nivel.
            </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
