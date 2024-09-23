import { useState } from "react";
import { authUser } from "../../../services/authUser.service";
import { authAdapter } from "../../../adapters/auth.adapter";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    setLoading(true);
    try {
      const adaptedData = authAdapter(await authUser(credentials));
      setUserData(adaptedData);
      setError(null);
      console.log("Login successful:", adaptedData);
    } catch (err) {
      console.error("Error logging in:", err);
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="text" name="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {loading ? (
        <p>Cargando...</p>
      ) : userData ? (
        <div>
          <h2>Datos del Usuario</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      ) : (
        error && <p>{error}</p>
      )}
    </div>
  );
}
