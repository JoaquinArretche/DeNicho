const PublicRoutes = Object.freeze({
  AUTH: "auth",
  REGISTER: "register",
  LOGIN: "login",
  PRODUCT: "product",
  PRODUCTS: "products",
  SEARCH: "search",
  ABOUT_US: "nosotros",
  ENTERPRISES: "enterprises",
  CATEGORIES: "categories",
  ABOUT_US: "about-us",
});

const PrivateRoutes = Object.freeze({
  PRIVATE: "private",
});

const EnterpriseRoutes = Object.freeze({
  ENTERPRISE: "enterprise",
  DETAILS: "details",
});

const CustomerRoutes = Object.freeze({
  CUSTOMER: "customer",
  PROFILE: "profile",
  CART: "cart",
});

const AdminRoutes = Object.freeze({
  ADMIN: "admin",
  ENTERPRISES: "enterprises",
});

export {
  PublicRoutes,
  PrivateRoutes,
  EnterpriseRoutes,
  CustomerRoutes,
  AdminRoutes,
};
