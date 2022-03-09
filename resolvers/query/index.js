export const Query = {
  hello: () => "Hello World !!! ",
  // products resolver
  products: (parent, { filter }, { allProducts, reviews }) => {
    let filteredProducts = allProducts;
    if (filter) {
      // filter by onSale
      const { onSale, avgRating } = filter;
      if (onSale) {
        return filteredProducts.filter((product) => product.onSale);
      }
      // filter by avgRating greater than or equal to given avgRating
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;

          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, { productId }, { allProducts }) => {
    return allProducts.find((product) => product.id === productId);
  },
  // categories resolver
  categories: (parent, args, { allCategories }) => allCategories,
  category: (parent, { categoryId }, { allCategories }) => {
    return allCategories.find((category) => category.id === categoryId);
  },
};
