import { Col, Container, Row, Image } from "react-bootstrap";
import logo from "../img/Logotipo(Gomu)Transparente.png";
import styles from "../styles/FooterDesigne.module.css";

function Footer() {
    return (
      <footer>
        <Container>
          <Row className="justify-content-center mt-1">
            <Col xs={12} className="text-center">
              <Image src={logo} alt="Mi Logotipo" className={styles["logo-dimensiones"]}/>
              <p>TODOS LOS DERECHOS RESERVADOS ME PERTENECEN &copy; {new Date().getFullYear()}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;