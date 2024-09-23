import customAxios from "../middlewares/axios-interceptor";

const fetchProducts = ({ name }) => {
  console.log(name);
  return customAxios.get("/products", {
    params: {
      name: name,
    },
  });
};

export { fetchProducts };
