// ScreenProducts.js

import ContentTwo from "../components/ContentTwo";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import NavbarDesigne from "../components/NavbarDesigne";
import styles from "../styles/ScreenProducts.module.css"; // Importa tus estilos CSS

function ScreenProducts() {
  return (
    <div className={styles["product-screen-bg"]}>
      {" "}
      {/* Aplica la clase de fondo */}
      <NavbarDesigne />
      <HeaderTwo />
      <ContentTwo />
      <Footer />
    </div>
  );
}

export default ScreenProducts;
