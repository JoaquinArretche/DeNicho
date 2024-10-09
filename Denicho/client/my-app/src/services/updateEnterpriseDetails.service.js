import customAxios from "../middlewares/axios-interceptor";

const updateEnterpriseDetails = (newDetails) => {
  return customAxios.put("/enterprise/details", newDetails);
};

const updateCoverImage = (newImage) => {
  return customAxios.put("/enterprise/cover-image", newImage, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { updateEnterpriseDetails, updateCoverImage };
