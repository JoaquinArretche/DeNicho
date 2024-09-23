const attributesAdapter = (response) => {
  const { tags, sizes, colors } = response.data.attributes;
  return {
    tags: tags.map(({ name }) => name),
    sizes: sizes.map(({ size }) => size),
    colors: colors.map(({ color }) => color),
  };
};

export { attributesAdapter };
