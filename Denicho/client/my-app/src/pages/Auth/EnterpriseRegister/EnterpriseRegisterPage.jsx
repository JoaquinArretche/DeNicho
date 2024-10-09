import { useState } from "react";
import { registerEnterprise } from "../../../services/registerEnterprise.service";

export default function EnterpriseRegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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
    setError(null);
    setSuccess(false);

    try {
      await registerEnterprise(formData);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Registro de Emprendimiento</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
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
          Descripción:
          <textarea name="description" required />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" required />
        </label>
        <br />
        <label>
          Categoría:
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
        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Registrar"}
        </button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>Registro exitoso</p>}
    </div>
  );
}
