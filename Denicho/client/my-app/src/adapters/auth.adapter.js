const authAdapter = (response) => {
  const { user, token } = response.data;
  const { enterprise_details } = user && user;

  const adaptedUser = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.user_type,
  };

  if (enterprise_details) {
    adaptedUser.enterpriseDetails = {
      name: enterprise_details.name,
      whatsapp: enterprise_details.whatsapp,
      instagram: enterprise_details.instagram,
      description: enterprise_details.description,
      category: enterprise_details.category,
      logo: enterprise_details.logo_url,
    };
  }

  return {
    user: adaptedUser,
    token: token,
  };
};

export { authAdapter };
