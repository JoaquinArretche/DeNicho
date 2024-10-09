import { Route } from "react-router-dom";
import { PublicRoutes } from "../../models/routes";
import RoutesWithNotFound from "../../utils/RoutesWithNotFound.utility";
import CategoriesPage from "./Categories/CategoriesPage";
import EnterprisesByCategoryPage from "./ByCategory/EnterprisesByCategoryPage";
import EntrepreneursPage from "./EntrepreneurPage/EntrepreneurPage";

export default function Enterprises() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<EntrepreneursPage />} />
        <Route path={PublicRoutes.CATEGORIES} element={<CategoriesPage />} />
        {/* <Route
          path={`${PublicRoutes.ENTERPRISES}/:category`}
          element={<EnterprisesByCategoryPage />}
        /> */}
      </RoutesWithNotFound>
    </>
  );
}
