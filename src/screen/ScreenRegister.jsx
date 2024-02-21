import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import logo from "../img/logosmall.png";
import styles from "../styles/LoginDesigne.module.css";
import CardForm from "../components/CardForm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ScreenRegister() {
  const auth = useAuth();

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await auth.register(emailRegister, passwordRegister);
      setRegisterSuccess(true);
      setShowModal(true);
      console.log("Registro exitoso en firebase", emailRegister);
    } catch (error) {
      setRegisterSuccess(false);
      setShowModal(true);
    }
  };

  const modalTitle = registerSuccess
    ? "Registro Exitoso"
    : "Registro Incorrecto";
  const modalMessage = registerSuccess
    ? "Nuevo usuario registrado con éxito. ¿Quieres ir a iniciar sesión?"
    : "Fallo el registro del usuario. Necesitas poner 8 carácteres en la contraseña como máximo para crear tu cuenta, cómo también cualquier correo @gmail o @hotmail. Por favor, inténtelo nuevamente.";

  return (
    <div className={`d-flex justify-content-center ${styles["fondo-login"]}`}>
      <CardForm
        content={
          <Container>
            <Row className="d-flex flex-column">
              <Col sm={4}>
                <Link to="/">
                  <button className="btn btn-primary m-1">Volver Inicio</button>
                </Link>
              </Col>
              <Col sm={12} className="text-center">
                <h3>Register</h3>
                <img
                  alt="logo"
                  src={logo}
                  className={`mb-2 ${styles["dimensiones-logo"]}`}
                />
              </Col>
              <br />
              <Col sm={12} className="d-flex justify-content-center">
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Introduce Correo"
                      onChange={(e) => setEmailRegister(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Contraseña"
                      onChange={(e) => setPasswordRegister(e.target.value)}
                    />
                  </div>
                </form>
              </Col>
              <Col className="d-flex mt-4 p-2 justify-content-center">
                <Link to="/login" className=" m-2">
                  Iniciar Sesión
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary m-2"
                  onClick={(e) => handleRegister(e)}
                >
                  Registrarse
                </button>
              </Col>
            </Row>
            {showModal && (
              <div
                className="modal show"
                style={{
                  display: "block",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1050,
                }}
              >
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>{modalMessage}</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </Button>
                    {registerSuccess ? (
                      <Button
                        variant="primary"
                        onClick={() => navigate("/login")}
                      >
                        Registrarse
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => setShowModal(false)}
                      >
                        OK
                      </Button>
                    )}
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            )}
          </Container>
        }
      />
    </div>
  );
}

export default ScreenRegister;
