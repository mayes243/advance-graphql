import { v4 as uuid } from "uuid";

export const Mutation = {
  // addCategory
  addCategory: (parent, { input }, { allCategories }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name,
    };

    allCategories.push(newCategory);

    return newCategory;
  },
  // add products
  addProduct: (parent, { input }, { allProducts }) => {
    const { name, image, price, onSale, quantity, categoryId } = input;

    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId,
    };

    allProducts.push(newProduct);

    return newProduct;
  },
  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
  deleteCategory: (parent, { id }, { allCategories, allProducts }) => {
    allCategories = allCategories.filter((category) => category.id !== id);
    allProducts = allProducts.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },
};
