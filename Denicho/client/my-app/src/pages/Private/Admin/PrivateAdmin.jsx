import { Navigate, Route } from "react-router-dom";
import { AdminRoutes } from "../../../models/routes";
import RoutesWithNotFound from "../../../utils/RoutesWithNotFound.utility";
import Enterprirses from "./Enterprises/Enterprirses";

export default function PrivateAdmin() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={AdminRoutes.ADMIN} />} />
        <Route path={`${AdminRoutes.ENTERPRISES}`} element={<Enterprirses />} />
      </RoutesWithNotFound>
    </>
  );
}
