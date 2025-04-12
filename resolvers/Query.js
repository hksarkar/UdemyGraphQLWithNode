const Query = {
  hello: (parent, args, context) => {
    return "Welcome";
  },
  numberOfAnimals: () => {
    return 55;
  },
  price: () => {
    return 100.6;
  },
  isCool: () => {
    return true;
  },
  products: (parent, args, { db }) => {
    return db.products;
  },
  product: (parent, orgs, { db }) => {
    const productId = orgs.id;
    const product = db.products.find((product) => product.id === productId);
    if (!product) {
      return null;
    }
    return product;
  },
  categories: (parent, orgs, { db }) => {
    return db.categories;
  },
  category: (parent, orgs, { db }) => {
    const { id } = orgs;
    return db.categories.find((category) => category.id === id);
  },
};

module.exports = {
  Query,
};
