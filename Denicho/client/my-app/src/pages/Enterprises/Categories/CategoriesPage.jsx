import { useEffect, useState } from "react";
import { categoriesAdapter } from "../../../adapters/enterpriseCategories.adapter";
import { fetchCategories } from "../../../services/fetchEnterpriseCategories.service";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      const categories = categoriesAdapter(await fetchCategories());
      setCategories(categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await getCategories();
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      )}
    </div>
  );
}
