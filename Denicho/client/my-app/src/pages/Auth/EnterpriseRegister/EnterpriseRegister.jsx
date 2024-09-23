import { useState } from "react";
import { registerEnterprise } from "../../../services/registerEnterprise.service";

export default function EnterpriseRegister() {
  const [loading, setLoading] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("email", event.target.email.value);
    formData.append("whatsapp", event.target.whatsapp.value);
    formData.append("instagram", event.target.instagram.value);
    formData.append("description", event.target.description.value);
    formData.append("password", event.target.password.value);
    formData.append("category", event.target.category.value);
    formData.append("logo", event.target.logo.files[0]);

    setLoading(true);
    try {
      const response = await registerEnterprise(formData);
      setAuthData(response.message);
      setError(null);
      console.log("Register successful:", response);
    } catch (err) {
      console.error("Error registering enterprise:", err);
      setError(err.message);
      setAuthData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Enterprise Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Whatsapp:
          <input type="text" name="whatsapp" required />
        </label>
        <br />
        <label>
          Instagram:
          <input type="text" name="instagram" />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" required />
        </label>
        <br />
        <label>
          Password:
          <input type="text" name="password" required />
        </label>
        <br />
        <label>
          Category:
          <select name="category" required>
            <option value="Arte">Arte</option>
            <option value="Hogar&Dec">Hogar & Dec</option>
            <option value="Moda">Moda</option>
          </select>
        </label>
        <br />
        <label>
          Logo:
          <input type="file" name="logo" accept="image/*" required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {loading ? (
        <p>Cargando...</p>
      ) : authData ? (
        <div>
          <pre>{authData}</pre>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
