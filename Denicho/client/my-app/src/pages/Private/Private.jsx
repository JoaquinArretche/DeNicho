import { Navigate, Route } from "react-router-dom";
import RoutesWithNotFound from "../../utils/RoutesWithNotFound.utility";
import {
  AdminRoutes,
  CustomerRoutes,
  EnterpriseRoutes,
  PrivateRoutes,
} from "../../models/routes";
import PrivateEnterprise from "./Enterprise/PrivateEnterprise";
import RoleGuard from "../../guards/roles.guard";
import PrivateCustomer from "./Customer/PrivateCustomer";
import PrivateAdmin from "./Admin/PrivateAdmin";

export default function Private() {
  return (
    <>
      <RoutesWithNotFound>
        <Route
          path="/"
          element={<Navigate to={`/${PrivateRoutes.PRIVATE}`} />}
        />
        <Route element={<RoleGuard roles={["admin"]} />}>
          <Route path={`${AdminRoutes.ADMIN}/*`} element={<PrivateAdmin />} />
        </Route>
        <Route element={<RoleGuard roles={["enterprise"]} />}>
          <Route
            path={`${EnterpriseRoutes.ENTERPRISE}/*`}
            element={<PrivateEnterprise />}
          />
        </Route>
        <Route
          path={`${CustomerRoutes.CUSTOMER}/*`}
          element={<PrivateCustomer />}
        />
      </RoutesWithNotFound>
    </>
  );
}
