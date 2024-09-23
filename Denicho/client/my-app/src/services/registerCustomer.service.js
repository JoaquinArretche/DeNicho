import customAxios from "../middlewares/axios-interceptor";

const registerCustomer = (formData) => {
  return customAxios.post("/auth/register", formData);
};

export { registerCustomer };
