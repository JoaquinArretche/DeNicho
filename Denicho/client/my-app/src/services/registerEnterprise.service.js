import customAxios from "../middlewares/axios-interceptor";

const registerEnterprise = (formData) => {
  return customAxios.post("/auth/register/enterprise", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { registerEnterprise };
