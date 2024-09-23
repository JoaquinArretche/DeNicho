import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/fetchProducts.service";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name } = useParams();

  const searchProdcut = async () => {
    try {
      const response = await fetchProducts({ name: name });
      setProducts(response);
      console.log("Success response", response);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts(null);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await searchProdcut();
      setLoading(false);
    };
    loadData();
  }, [name]);

  return (
    <div>
      <h1>Search Products</h1>
      {loading ? (
        <p>Cargando datos...</p>
      ) : products ? (
        <pre>{JSON.stringify(products, null, 2)}</pre>
      ) : (
        <p>No se encontraron productos</p>
      )}
    </div>
  );
}
