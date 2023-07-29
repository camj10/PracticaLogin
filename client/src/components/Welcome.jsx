import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

const Welcome = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:8000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <div className={styles.welcome}>
      <h3>{"Hola mundo!🎉"}</h3>
    </div>
  );
};

export default Welcome;