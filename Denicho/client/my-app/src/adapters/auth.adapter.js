const authAdapter = (response) => {
  const { user, enterprise, token } = response.data;

  const adaptedUser = {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.user_type,
    },
  };

  if (enterprise) {
    adaptedUser.enterprise = {
      name: enterprise.name,
      category: enterprise.category,
      logo: enterprise.logo_url,
    };
  }

  return {
    ...adaptedUser,
    token: token,
  };
};

export { authAdapter };
