import customAxios from "../middlewares/axios-interceptor";

const activateEnterprise = (id) => {
  return customAxios.put(`/admin/enterprises/active/${id}`);
};

export { activateEnterprise };
