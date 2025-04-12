const Category = {
  products: (parent, orgs, { db }) => {
    const categoryId = parent.id;
    const product = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    if (!product) {
      return null;
    }
    return product;
  },
};

module.exports = { Category };
