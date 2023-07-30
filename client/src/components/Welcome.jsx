import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

const Welcome = () => {
  const [name, setName] = useState();

  const [hora, setHora] = useState();

  // const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      console.log("token: ",token)
      axios
        .get(`http://localhost:8000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => (setName(data.nombre),setHora(data.ultHora)))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <div className={styles.welcome}>
      <h2>
        Hola mundo 🎉
      </h2>
      <h3>{name ? `¡Bienvenido ${name}!` : "Bienvenido"}</h3>
      <h4>{`Último inicio de sesión: ${hora}`}</h4>
    </div>
  );
};

export default Welcome;