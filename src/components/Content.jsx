// Content.jsx
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import studying from "../img/studying.png"; // Asegúrate de que la ruta de la imagen sea correcta
import styles from "../styles/Content.module.css";

function Content() {
  return (
    <Container className={styles["container-content"]}>
      <Row className="d-flex flex-column p-1">
        <Col
          sm={12}
          className={`${styles["title-container"]} text-white p-3 rounded`}
        >
          <h1>CÓMO ENTENDER LA PROGRAMACIÓN</h1>
        </Col>
        <Col sm={12}>
          <p className={`${styles["custom-container"]} text-white p-3 rounded`}>
            Quizás eres un programador noble que está comenzando a desenvolverse
            en algún lenguaje de programación y te está constando arrancar o
            afianzar todos los conceptos nuevos que te vas encontrando. El
            aprendizaje de un lenguaje de programación es algo que requiere un
            relativo alto número de horas, por lo que cuánto mayor sea la
            calidad de ese tiempo que dediquemos mejor serán los resultados.
          </p>
          <p className={`${styles["custom-container"]} text-white p-3 rounded`}>
            A continuación, os expongo una serie de tips o consejos (como
            queráis llamarlos) inspirados en experiencias propias y unos cuantos
            posts leídos sobre el tema que rozan la temática de la auto ayuda
            encapsulada en recetas.
          </p>
        </Col>
        <Col
          sm={12}
          md={6}
          className="img-container d-flex justify-content-center"
        >
          <img
            alt="Estudio"
            className={`${styles["studying-img"]}`}
            src={studying}
          />
        </Col>
        <Col sm={12} md={6} className="text-white">
          <h3>Pasos a seguir:</h3>
          <ul className={`${styles["custom-list"]} list-group`}>
            <li className="list-group-item bg-primary text-white">
              Aprende los fundamentos de programación
            </li>
            <li className="list-group-item bg-primary text-white">
              Practica todos los días lo aprendido
            </li>
            <li className="list-group-item bg-primary text-white">
              Construye tu primer proyecto de programación
            </li>
            <li className="list-group-item bg-primary text-white">
              Elige lo que te interesa.
            </li>
            <li className="list-group-item bg-primary text-white">
              Comienza con un código sencillo
            </li>
            <li className="list-group-item bg-primary text-white">
              Construye algo útil
            </li>
            <li className="list-group-item bg-primary text-white">
              Resuelve errores o bugs en tu código
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
