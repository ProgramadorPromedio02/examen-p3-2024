import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";
import WeatherComponent from "./WeatherComponent";
import styles from "../styles/Content.module.css";

import { Col } from "react-bootstrap";

function SideBar() {
  const lenguajes = [
    { id: 1, nombre: "JavaScript", visto: true },
    { id: 2, nombre: "Python", visto: false },
    { id: 3, nombre: "Java", visto: false },
    { id: 4, nombre: "HTML", visto: true },
    { id: 5, nombre: "CSS", visto: true },
  ];
  return (
    <div className={`${styles["container-sidebar"]}`}>
      <Col
        sm={6}
        md={11}
        lg={12}
        className="d-flex justify-content-end align-items-end"
      >
        <CustomCard
          content={
            <div className="text-center m-1 p-1 ">
              <h6>Para la realización de está página, se uso:</h6>
              <ul>
                {lenguajes.map((lenguaje) => (
                  <li key={lenguaje.id}>
                    {lenguaje.nombre}{" "}
                    {lenguaje.visto ? <span>✔</span> : <span>❌</span>}
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      </Col>
      <Col
        sm={6}
        md={11}
        lg={12}
        className="d-flex justify-content-end align-items-end"
      >
        <CustomCard
          content={
            <div className="text-center m-1 p-1 ">
              <h6>
                Algunas de nuestras recomendaciones para un Setup profesional
              </h6>
              <Link to="/products" className=" m-2 ">
                <button type="submit" className="btn btn-primary m-2 ">
                  Ir a la Tienda
                </button>
              </Link>
            </div>
          }
        />
      </Col>
      <Col
        sm={6}
        md={11}
        lg={12}
        className="d-flex justify-content-end align-items-end"
      >
        <CustomCard content={<WeatherComponent />} />
      </Col>
    </div>
  );
}

export default SideBar;
