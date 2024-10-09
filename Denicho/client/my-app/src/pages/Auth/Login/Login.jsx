import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { authUser } from "../../../services/authUser.service";
import { authAdapter } from "../../../adapters/auth.adapter";
import { PublicRoutes } from "../../../models/routes";
import { createUser } from "../../../redux/states/user";

const LoginForm = ({ onSwitch, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    setError(null);
    setLoading(true);
    try {
      const adaptedUser = authAdapter(await authUser(credentials));
      dispatch(createUser({ ...adaptedUser }));
    } catch (err) {
      console.log(err);
      setError(err?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="auth-container">
        <div className="form">
          <h2>Iniciar Session</h2>
          <form onSubmit={handleSubmit}>
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
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
          <a href={PublicRoutes.REGISTER}>
            <p>
              ¿No tienes cuenta? <span onClick={onSwitch}>Registrate aquí</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
