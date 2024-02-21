import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/WeatherComponent.module.css"; // Importa el archivo de estilos CSS

export default function WeatherComponent() {
  const [climadata, setclimadata] = useState(null);
  const [cargando, setcargando] = useState(true);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Tucumán,ar&appid=ea64807460cedbd450d314ef4e2597be`;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(URL);
        setclimadata(response.data);
        setcargando(false);
      } catch (error) {
        console.error("Error al obtener los datos del clima :(.", error);
        setcargando(false);
      }
    };
    fetchdata();
  }, []);

  if (cargando) {
    return <div>cargando...</div>;
  }

  if (!climadata) {
    return <div>clima no disponible</div>;
  }

  const { name, weather, main } = climadata;

  return (
    <div className={styles["weather-container"]}>
      <div>{name}</div>
      <div>
        <strong>Clima Actual: </strong>
        {weather[0].description}
      </div>
      <div>
        <strong>Temperatura: </strong>
        {main.temp}
      </div>
      <div>
        <strong>Humedad: </strong>
        {main.humidity} %
      </div>
    </div>
  );
}
