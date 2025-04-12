const Product = {
  category: (parent, orgs, { db }) => {
    const { categoryId } = parent;
    return db.categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, orgs, { db }) => {
    const { id } = parent;
    console.log(parent);
    return db.reviews.filter((review) => review.productId === id);
  },
};

module.exports = { Product };
