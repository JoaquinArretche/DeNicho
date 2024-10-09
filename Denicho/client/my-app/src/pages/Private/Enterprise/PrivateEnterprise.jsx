import { Navigate, Route } from "react-router-dom";
import { EnterpriseRoutes } from "../../../models/routes";
import RoutesWithNotFound from "../../../utils/RoutesWithNotFound.utility";
import EnterpriseDetails from "./Details/EnterpriseDetails";

export default function PrivateEnterprise() {
  return (
    <>
      <RoutesWithNotFound>
        <Route
          path="/"
          element={<Navigate to={EnterpriseRoutes.ENTERPRISE} />}
        />
        <Route
          path={`${EnterpriseRoutes.DETAILS}`}
          element={<EnterpriseDetails />}
        />
      </RoutesWithNotFound>
    </>
  );
}
