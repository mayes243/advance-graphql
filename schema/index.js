import { gql } from "apollo-server";

// String, Float, Int, Boolean, ID,
export const typeDefs = gql`
  type Query {
    hello: String!
    products(filter: ProductsFilterInput): [ProductList!]!
    product(productId: ID!): ProductList!
    categories: [CategoryList!]!
    category(categoryId: ID!): CategoryList!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): CategoryList!
    addProduct(input: AddProductInput!): ProductList!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput!): CategoryList!
    updateProduct(id: ID!, input: UpdateProductInput!): ProductList!
  }

  input ProductsFilterInput {
    onSales: Boolean
    avgRating: Int
  }

  input UpdateCategoryInput {
    name: String!
  }

  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String
  }

  input AddCategoryInput {
    name: String!
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String!
  }

  type ProductList {
    id: ID
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: CategoryList
    reviews: [Review!]!
  }

  type CategoryList {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [ProductList!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
`;
