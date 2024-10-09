import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models/routes";

export default function RoleGuard({ roles }) {
  const userState = useSelector((store) => store.session);
  const hasAccess = roles.includes(userState.user.role);
  return hasAccess ? (
    <Outlet />
  ) : (
    <Navigate replace to={`/${PublicRoutes.AUTH}/${PublicRoutes.LOGIN}`} />
  );
}
