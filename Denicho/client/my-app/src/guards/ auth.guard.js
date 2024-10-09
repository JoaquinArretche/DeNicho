import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models/routes";

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate replace to={PrivateRoutes.PRIVATE} />
);

export const AuthGuard = ({ privateValidation }) => {
  const userState = useSelector((store) => store.session);
  return userState.user.id ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={`/${PublicRoutes.AUTH}/${PublicRoutes.LOGIN}`} />
  );
};

export default AuthGuard;
