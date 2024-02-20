import { Col, Container, Row } from "react-bootstrap";
import studying from "../img/studying.png";
import styles from "../styles/Content.module.css";
import { Link } from "react-router-dom";

function Content() {
  return (
    <>
      <Container className={styles["container-content"]}>
        <Row className="d-flex flex-column p-1">
          <Col sm={12} className="text-start">
            <h1>CÓMO ENTENDER LA PROGRAMACIÓN</h1>
          </Col>
          <Col sm={12}>
            <p>
              Quizás eres un programador noble que está comenzando a
              desenvolverse en algún lenguaje de programación y te está
              constando arrancar o afianzar todos los conceptos nuevos que te
              vas encontrando. El aprendizaje de un lenguaje de programación es
              algo que requiere un relativo alto número de horas, por lo que
              cuánto mayor sea la calidad de ese tiempo que dediquemos mejor
              serán los resultados.
            </p>
            <p>
              A continuación, os expongo una serie de tips o consejos (como
              queráis llamarlos) inspirados en experiencias propias y unos
              cuantos posts leídos sobre el tema que rozan la temática de la
              auto ayuda encapsulada en recetas.
            </p>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-start">
            <img
              alt="foto content"
              className={styles["studying-img"]}
              src={studying}
            />
          </Col>
          <Col sm={12} md={6}>
            <h3>Pasos a seguir:</h3>
            <ul>
              <li>Aprende los fundamentos de programación</li>
              <li>Practica todos los días lo aprendido</li>
              <li>Construye tu primer proyecto de programación</li>
              <li>Elige lo que te interesa.</li>
              <li>Comienza con un código sencillo</li>
              <li>Construye algo útil</li>
              <li>Resuelve errores o bugs en tu código</li>
            </ul>
            <span>
              Ya que sabes cómo aprender programación desde cero, el siguiente
              paso será elegir correctamente tus periféricos. Para ello, estas
              son algunas de <Link to="/Products">mis recomendaciones</Link>.
              Siguiendo todos estos consejos tanto en hardware como en software,
              en menos de 4 meses serás capaz de desarrollar un pensamiento
              computacional mientras te inicias en las metodologías y claves
              para escribir un código útil, rápido y elegante con Python.
              ¡Anímate y empieza a programar!
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Content;
