import { useState } from "react";
import { registerCustomer } from "../../../services/registerCustomer.service";
import { authAdapter } from "../../../adapters/auth.adapter";

export default function CustomerRegister() {
  const [loading, setLoading] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [error, setError] = useState(null);

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
      setError(null);
      console.log("Register successful:", adaptedAuthData);
    } catch (err) {
      console.error("Error registering customer:", err);
      setError(err.message);
      setAuthData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Customer Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <br />
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
        <button type="submit" disabled={loading}>
          Register
        </button>
      </form>
      {loading ? (
        <p>Cargando...</p>
      ) : authData ? (
        <div>
          <h2>Datos Registrados:</h2>
          <pre>{JSON.stringify(authData, null, 2)}</pre>
        </div>
      ) : (
        error && <p>{error}</p>
      )}
    </div>
  );
}
