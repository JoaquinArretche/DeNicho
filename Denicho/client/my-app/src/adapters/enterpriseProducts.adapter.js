const enterpriseProductAdapter = (response) => {
  return response.data.enterprises.map((enterprise) => ({
    user: {
      id: enterprise.user.id,
      email: enterprise.user.email,
      enterpriseDetails: {
        name: enterprise.user.enterprise_details.name,
        logo: enterprise.user.enterprise_details.logo_url,
        category: enterprise.user.enterprise_details.category_name,
      },
    },
    products: enterprise.products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      currency: product.currency,
      stock: product.stock,
      tags: product.tags.map((tag) => tag.name),
      sizes: product.sizes.map((size) => size.size),
      colors: product.colors.map((color) => color.color),
      images: product.images.map((image) => image.img_url),
    })),
  }));
};

export { enterpriseProductAdapter };
