import customAxios from "../middlewares/axios-interceptor";

const fetchProductAttributes = () => {
  return customAxios.get("/products/attributes");
};

export { fetchProductAttributes };
