import { Navigate, Route } from "react-router-dom";
import EnterpriseRegisterPage from "./EnterpriseRegister/EnterpriseRegisterPage";
import { PublicRoutes } from "../../models/routes";
import RoutesWithNotFound from "../../utils/RoutesWithNotFound.utility";
import RegisterForm from "./Register/Register";
import LoginForm from "./Login/Login";

export default function Auth() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
        <Route
          path={`${PublicRoutes.REGISTER}/${PublicRoutes.ENTERPRISES}`}
          element={<EnterpriseRegisterPage />}
        />
        <Route path={`${PublicRoutes.REGISTER}`} element={<RegisterForm />} />
        <Route path={`${PublicRoutes.LOGIN}`} element={<LoginForm />} />
      </RoutesWithNotFound>
    </>
  );
}
