import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Nosotros from "./pages/Nosotros/Nosotros";
import Enterprises from "./pages/Enterprises/Enterprises";
import EnterpriseRegister from "./pages/Auth/EnterpriseRegister/EnterpriseRegister";
import CustomerRegister from "./pages/Auth/CustomerRegister/CustomerRegister";
import Login from "./pages/Auth/Login/Login";
import EnterprisesByCategory from "./pages/Enterprises/ByCategory/EnterprisesByCategory";

const Layout = () => {
  return (
    <body className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </body>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/products/search/:name",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/enterprises",
        element: <Enterprises />,
      },
      {
        path: "/enterprises/:category",
        element: <EnterprisesByCategory />,
      },
      {
        path: "/auth/register/enterprise",
        element: <EnterpriseRegister />,
      },
      {
        path: "/auth/register",
        element: <CustomerRegister />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
