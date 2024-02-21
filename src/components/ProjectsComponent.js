import React from "react";
import Proyecto3 from "../img/PROYECTO3.png";
import Proyecto2 from "../img/PROYECTO2.png";
import Proyecto1 from "../img/PROYECTO1.png";
import styles from "../styles/ProjectsComponent.module.css"; // Importa los estilos CSS

export default function ProjectsComponent({ project }) {
  return (
    <section
      className={`proyectos-recientes seccion-clara d-flex flex-column ${styles.projectsSection}`}
    >
      <h2 className={`${styles.heading} text-white`}>Mis proyectos</h2>
      <h5 className={styles.description}>
        Estos fueron proyectos que pude hacer por mi cuenta...
      </h5>
      <div className={`container text-center ${styles.projectsContainer}`}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className={`proyecto ${styles.project}`}>
              <img src={Proyecto1} alt="Proyecto 1" className="img-fluid" />
              <div className={`overlay ${styles.overlay}`}>
                <h2>Pokédex</h2>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/ProgramadorPromedio02/pok-dex-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://effervescent-sundae-e2fc0d.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className={`proyecto ${styles.project}`}>
              <img
                src={Proyecto2}
                alt="Examen Final para ProgramaciónIII"
                className="img-fluid"
              />
              <div className={`overlay ${styles.overlay}`}>
                <h5>Examen Final para ProgramaciónIII</h5>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/ProgramadorPromedio02/examen-final-P3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://programacioniiiexamenfinal.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className={`proyecto ${styles.project}`}>
              <img
                src={Proyecto3}
                alt="Curso de React con Sergie Code"
                className="img-fluid"
              />
              <div className={`overlay ${styles.overlay}`}>
                <h5>Curso de React</h5>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/ProgramadorPromedio02/pok-dex-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/ProgramadorPromedio02"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className={`btn btn-info ${styles.btn}`}>
          Ver más proyectos <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>
    </section>
  );
}
