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
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
      /*if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= avgRating;
        });
      }*/
    }

    return filteredProducts;
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
