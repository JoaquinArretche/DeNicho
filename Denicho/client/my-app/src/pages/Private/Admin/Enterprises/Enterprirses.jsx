import { useEffect, useState } from "react";
import { fetchAllEnterprises } from "../../../../services/fetchAllEnterprises.service";
import { allEnterprisesAdapter } from "../../../../adapters/allEnterprises.adapter";
import { activateEnterprise } from "../../../../services/ActivateEnterprise.service";

export default function Enterprises() {
  const [enterprises, setEnterprises] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getEnterprises = async () => {
    setEnterprises([]);
    setLoading(true);

    try {
      const entAdapter = allEnterprisesAdapter(await fetchAllEnterprises());
      setEnterprises(entAdapter);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async (id) => {
    try {
      await activateEnterprise(id);
      getEnterprises();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Empresas</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {enterprises.map((enterprise) => (
            <div
              key={enterprise.id}
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {enterprise.enterprise.logo && (
                <img
                  src={enterprise.enterprise.logo}
                  alt={enterprise.enterprise.name}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
              <h2>{enterprise.enterprise.name}</h2>
              <p>Dueño: {enterprise.user.email}</p>
              <p>
                Status:{" "}
                {enterprise.status === "pending" ? "Pendiente" : "Activo"}
              </p>
              {enterprise.status === "pending" && (
                <button
                  onClick={() => handleActivate(enterprise.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Activar
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
