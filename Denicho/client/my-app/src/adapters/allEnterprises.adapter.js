const allEnterprisesAdapter = (response) => {
  const { enterprises } = response.data;

  const enterprisesAdapter = enterprises.map(({ user, enterprise }) => {
    return {
      id: user.id,
      status: user.status,
      user: {
        email: user.email,
      },
      enterprise: {
        name: enterprise.name,
        logo: enterprise.logo_url,
      },
    };
  });
  return enterprisesAdapter;
};

export { allEnterprisesAdapter };
