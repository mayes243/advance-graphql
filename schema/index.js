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
  }

  input ProductsFilterInput {
    onSales: Boolean
    avgRating: Int
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
