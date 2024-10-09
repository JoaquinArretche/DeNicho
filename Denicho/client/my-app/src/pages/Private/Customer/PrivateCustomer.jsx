import { Navigate, Route } from "react-router-dom";
import { CustomerRoutes } from "../../../models/routes";
import RoutesWithNotFound from "../../../utils/RoutesWithNotFound.utility";
import ProfileUser from "./ProfileUser/ProfileUser";
import Cart from "./Cart/Cart";

export default function PrivateCustomer() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={CustomerRoutes.CUSTOMER} />} />
        <Route path={`${CustomerRoutes.PROFILE}`} element={<ProfileUser />} />
        <Route path={`${CustomerRoutes.CART}`} element={<Cart />} />
      </RoutesWithNotFound>
    </>
  );
}
