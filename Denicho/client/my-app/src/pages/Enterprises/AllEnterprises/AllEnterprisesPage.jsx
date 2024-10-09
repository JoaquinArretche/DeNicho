import { useEffect, useState } from "react";
import { fetchEnterprises } from "../../services/fetchEnterprises.service";
import { enterprisesAdapter } from "../../../adapters/enterprises.adapter";

export default function EnterprisesPage() {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEnterprises = async () => {
    try {
      const enterprises = enterprisesAdapter(await fetchEnterprises());
      setEnterprises(enterprises);
    } catch (err) {
      console.error("Error fetching enterprises:", err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await getEnterprises();
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Enterprises</h1>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <pre>{JSON.stringify(enterprises, null, 2)}</pre>
      )}
    </div>
  );
}
