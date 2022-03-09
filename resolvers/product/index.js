export const ProductList = {
  category: ({ categoryId }, args, { allCategories }) => {
    return allCategories.find((category) => category.id === categoryId);
  },
  reviews: ({ id: productId }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === productId);
  },
};
