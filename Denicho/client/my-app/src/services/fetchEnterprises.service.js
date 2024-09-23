import customAxios from "../middlewares/axios-interceptor";

const fetchEnterprises = () => {
  return customAxios.get("/enterprises");
};

export { fetchEnterprises };
