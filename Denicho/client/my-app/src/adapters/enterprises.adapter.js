const enterprisesAdapter = (response) => {
  console.log(response.data.enterprises)
  const enterprises = response.data.enterprises.map(
    ({ enterprise_details: entDetails, ...rest }) => ({
      id: rest.id,
      enterprise_details: {
        name: entDetails.name,
        logo: entDetails.logo_url,
        description: entDetails.description,
        category: entDetails.category
      },
    })
  );
  return enterprises;
};

export { enterprisesAdapter };
