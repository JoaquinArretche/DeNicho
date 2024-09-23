import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEnterpriseProducts } from "../../../services/fetchEnterpriseProducts.service";
import { fetchProductAttributes } from "../../../services/fetchProductAttributes.service";
import { enterpriseProductAdapter } from "../../../adapters/enterpriseProducts.adapter";
import { attributesAdapter } from "../../../adapters/attributes.adapter";

export default function EnterprisesByCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [attributes, setAttributes] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    tags: [],
    sizes: [],
    colors: [],
    priceMin: "",
    priceMax: "",
  });
  const [loading, setLoading] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const fetchProducts = async (filters = {}) => {
    setLoadingProducts(true);
    try {
      const response = await fetchEnterpriseProducts(category, filters);
      const adaptedProducts = enterpriseProductAdapter(response);
      setProducts(adaptedProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    } finally {
      setLoadingProducts(false);
    }
  };

  const fetchAttributes = async () => {
    try {
      const response = await fetchProductAttributes();
      const adaptedAttributes = attributesAdapter(response);
      setAttributes(adaptedAttributes);
    } catch (err) {
      console.error("Error fetching product attributes:", err);
    }
  };

  const toggleFilter = (type, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [type]: value,
      };
      fetchProducts(updatedFilters);
      return updatedFilters;
    });
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchAttributes();
      await fetchProducts(selectedFilters);
      setLoading(false);
    };

    loadData();
  }, [category]);

  return (
    <div>
      <h1>Enterprises By Category: {category}</h1>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h2>Product Attributes</h2>
            {attributes && (
              <div>
                {/* Tags Filter */}
                <div>
                  <h3>Tags</h3>
                  {attributes.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() =>
                        toggleFilter(
                          "tags",
                          selectedFilters.tags.includes(tag)
                            ? selectedFilters.tags.filter((t) => t !== tag)
                            : [...selectedFilters.tags, tag]
                        )
                      }
                      style={{
                        backgroundColor: selectedFilters.tags.includes(tag)
                          ? "lightgreen"
                          : "lightgray",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Sizes Filters */}
                <div>
                  <h3>Sizes</h3>
                  {attributes.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        toggleFilter(
                          "sizes",
                          selectedFilters.sizes.includes(size)
                            ? selectedFilters.sizes.filter((s) => s !== size)
                            : [...selectedFilters.sizes, size]
                        )
                      }
                      style={{
                        backgroundColor: selectedFilters.sizes.includes(size)
                          ? "lightgreen"
                          : "lightgray",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Colors Filters */}
                <div>
                  <h3>Colors</h3>
                  {attributes.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() =>
                        toggleFilter(
                          "colors",
                          selectedFilters.colors.includes(color)
                            ? selectedFilters.colors.filter((c) => c !== color)
                            : [...selectedFilters.colors, color]
                        )
                      }
                      style={{
                        backgroundColor: selectedFilters.colors.includes(color)
                          ? "lightgreen"
                          : "lightgray",
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>

                {/* Prices Filter */}
                <div>
                  <h3>Price Range</h3>
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={selectedFilters.priceMin}
                    onChange={(e) => toggleFilter("priceMin", e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={selectedFilters.priceMax}
                    onChange={(e) => toggleFilter("priceMax", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Products List */}
          <div style={{ width: "50%" }}>
            <h2>Products</h2>
            {loadingProducts ? (
              <p>Cargando productos...</p>
            ) : products.length > 0 ? (
              <pre>{JSON.stringify(products, null, 2)}</pre>
            ) : (
              <p>
                No se encontraron productos para esta categoría o filtros
                aplicados.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
