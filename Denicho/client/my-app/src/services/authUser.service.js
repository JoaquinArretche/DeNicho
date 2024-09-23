import customAxios from "../middlewares/axios-interceptor";

const authUser = (credentials) => {
  return customAxios.post("/auth/login", credentials);
};

export { authUser };
