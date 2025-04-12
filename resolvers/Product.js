const Product = {
  category: (parent, orgs, { db }) => {
    const { categoryId } = parent;
    return db.categories.find((category) => category.id === categoryId);
  },
};

module.exports = { Product };
