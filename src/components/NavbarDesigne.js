// NavbarDesigne.js
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NavbarDesigne.module.css";

function NavbarDesigne() {
  return (
    <Navbar bg="primary" className={styles.navbar}>
      <Container className="text-light">
        <Navbar.Brand className="text-light" href="/">
          INICIO
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-light p-1" style={{ fontSize: "15px" }}>
            <Link className="text-light" to="/login">
              Iniciar Sesión
            </Link>
            <br />
            <Link className="text-light" to="/register">
              Registrarse
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDesigne;
