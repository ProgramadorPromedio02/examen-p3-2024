import { Carousel } from "react-bootstrap";
import styles from "../styles/CarouselImage.module.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";

function CarouselHeader() {
  return (
    <Carousel className="mb-4">
      <Carousel.Item>
        <img className={styles["image"]} src={img1} alt="img uno carousel" />
        <Carousel.Caption>
          <h3>
            <a
              href="https://www.youtube.com/watch?v=6Jfk8ic3KVk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprende React
            </a>
          </h3>
          <p>Una de las librerias más importantes de JavaScript.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img2} alt="img dos carousel" />
        <Carousel.Caption>
          <h3>
            <a
              href="https://www.youtube.com/watch?v=DLikpfc64cA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprende Python
            </a>{" "}
          </h3>
          <p>Uno de los lenguajes más usados para la ciencia de datos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img3} alt="img tres carousel" />
        <Carousel.Caption>
          <a
            href="https://www.youtube.com/watch?v=DLikpfc64cA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Aprende Bootstrap</h3>
          </a>
          <p>
            Un Framework para desarrollar sitios web adaptables(responsivos).
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img4} alt="img cuatro carousel" />
        <Carousel.Caption>
          <a
            href="https://www.youtube.com/watch?v=XqFR2lqBYPs&t=128s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Aprende HTML Y CSS</h3>
          </a>
          <p>
            Lenguaje utilizado para estructurar el contenido de las páginas web
            y que permite estilizar, para mejorar su presentación visual.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles["image"]} src={img5} alt="img cuatro carousel" />
        <Carousel.Caption>
          <a
            href="https://www.youtube.com/watch?v=ivdTnPl1ND0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Aprende JavaScript</h3>
          </a>
          <p>
            Lenguaje de programación de alto nivel, interpretado y orientado a
            objetos, ampliamente utilizado en el desarrollo web para crear
            interactividad y dinamismo en las páginas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
