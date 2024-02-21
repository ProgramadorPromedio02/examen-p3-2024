// ContentTwo.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/ContentTwo.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ContentTwo() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={` ${styles.table}`}>
      {products.map((product) => (
        <div
          key={product.id}
          className={`${styles.card} bg-primary text-white`}
        >
          <div className={styles.cardImage}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div className={`${styles.category} bg-secondary text-white`}>
            {" "}
            Descripcion{" "}
          </div>
          <div className={`${styles.heading} text-white`}>
            <div
              className={`d-flex flex-column align-items-center ${styles.author}`}
            >
              <span className={`${styles.name} text-white`}>
                {product.title}
              </span>
              <br />
              <span className={`${styles.productPrice} text-danger`}>
                <strong>$ {product.price}</strong>
              </span>
              <br />
              <span className={`${styles.name} text-success`}>
                {product.rating.rate < 3 ? "👎" : "👍"} {product.rating.rate}
              </span>
              <br />
              <Button variant="warning" onClick={() => navigate("/error")}>
                Ver Más
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
