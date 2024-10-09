import customAxios from "../middlewares/axios-interceptor";

const fetchEnterpriseDetails = () => {
  return customAxios.get("/enterprise/details");
};

export { fetchEnterpriseDetails };
