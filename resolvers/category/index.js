export const CategoryList = {
  products: ({ id }, { filter }, { allProducts }) => {
    const categoryProducts = allProducts.filter(
      (product) => product.categoryId === id
    );
    const filteredCategoryProducts = categoryProducts;
    if (filter) {
      if (filter.onSales) {
        return filteredCategoryProducts.filter((product) => product.onSale);
      }
    }
    return filteredCategoryProducts;
  },
};
