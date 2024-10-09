import { Navigate, Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import { PublicRoutes } from "../../models/routes";
import RoutesWithNotFound from "../../utils/RoutesWithNotFound.utility";

export default function Products() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PublicRoutes.PRODUCTS} />} />
        <Route
          path={`${PublicRoutes.SEARCH}/:name`}
          element={<ProductsPage />}
        />
      </RoutesWithNotFound>
    </>
  );
}
