const enterprisesAdapter = (response) => {
  const enterprises = response.data.enterprises.map(
    ({ enterprise_details: entDetails, ...rest }) => ({
      id: rest.id,
      email: rest.email,
      enterprise_details: {
        name: entDetails.name,
        logo: entDetails.logo_url,
        description: entDetails.description,
        whatsapp: entDetails.whatsapp,
        instagram: entDetails.instagram,
      },
    })
  );
  return enterprises;
};

export { enterprisesAdapter };
