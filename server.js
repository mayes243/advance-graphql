import { ApolloServer } from "apollo-server";

import { Query } from "./resolvers/Query/index.js";
import { CategoryList } from "./resolvers/category/index.js";
import { ProductList } from "./resolvers/product/index.js";
import { Mutation } from "./resolvers/mutation/index.js";

// dummy data
import { allProducts, allCategories, reviews } from "./constant/index.js";

import { typeDefs } from "./schema/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    ProductList,
    CategoryList,
  },
  context: {
    allProducts,
    allCategories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is up at ${url} 🚀🚀🚀🚀`);
});
