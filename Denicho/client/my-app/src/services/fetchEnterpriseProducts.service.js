import customAxios from "../middlewares/axios-interceptor";

const fetchEnterpriseProducts = (
  category,
  { tags, sizes, colors, priceMin, priceMax } = {}
) => {
  return customAxios.get(`/products/enterprise/${category}`, {
    params: {
      tags: tags,
      sizes: sizes,
      colors: colors,
      price_min: priceMin,
      price_max: priceMax,
    },
  });
};

export { fetchEnterpriseProducts };
