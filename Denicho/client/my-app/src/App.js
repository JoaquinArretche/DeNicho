import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import store from "./redux/store";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import RoutesWithNotFound from "./utils/RoutesWithNotFound.utility";
import Auth from "./pages/Auth/Auth";
import Private from "./pages/Private/Private";
import AuthGuard from "./guards/ auth.guard";
import Enterprises from "./pages/Enterprises/Enterprises";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <RoutesWithNotFound>
            <Route path="/" element={<Home />} />
            <Route path={PublicRoutes.ABOUT_US} element={<Nosotros />} />
            <Route path={`${PublicRoutes.AUTH}/*`} element={<Auth />} />
            <Route path={`${PublicRoutes.ENTERPRISES}/*`} element={<Enterprises />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesWithNotFound>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
