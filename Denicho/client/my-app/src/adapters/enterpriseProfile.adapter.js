const enterpriseDetailsAdapter = (response) => {
  const { details } = response.data;

  return {
    name: details.name,
    whatsapp: details.whatsapp,
    instagram: details.instagram,
    cover_image: details.cover_url,
    description: details.description,
    category: details.category,
  };
};

export { enterpriseDetailsAdapter };
