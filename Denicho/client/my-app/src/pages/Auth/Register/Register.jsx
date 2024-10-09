import React, { useState, useEffect } from "react";
import "./Register.css";
import { authAdapter } from "../../../adapters/auth.adapter";
import { registerCustomer } from "../../../services/registerCustomer.service";
import { PublicRoutes } from "../../../models/routes";

const RegisterForm = ({ onSwitch, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [authData, setAuthData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    setLoading(true);
    try {
      const adaptedAuthData = authAdapter(await registerCustomer(formData));
      setAuthData(adaptedAuthData);
      console.log("Register successful:", adaptedAuthData);
    } catch (err) {
      setAuthData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="auth-container">
        <div className="form">
          <h2>Bienvenido a Denicho</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre de Usuario</label>
              <input type="text" name="username" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Contraseña</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit">Registrarse</button>
          </form>
          {loading ? (
            <p>Cargando...</p>
          ) : authData ? (
            <div>
              <h2>Datos Registrados:</h2>
              <pre>{JSON.stringify(authData, null, 2)}</pre>
            </div>
          ) : null}
          <a href={PublicRoutes.LOGIN}>
            <p>
              ¿Ya tienes cuenta?{" "}
              <span onClick={onSwitch}>Inicia sesión aquí</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
