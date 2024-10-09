import customAxios from "../middlewares/axios-interceptor";

const fetchAllEnterprises = () => {
  return customAxios.get("/admin/enterprises");
};

export { fetchAllEnterprises };
