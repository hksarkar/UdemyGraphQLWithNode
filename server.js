const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema.js");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { db } = require("./db.js");

//const { products, categories, reviews } = db;
// A map of functions which return data for the schema.
const resolvers = {
  Query: Query,
  Mutation: Mutation,
  Category: Category,
  Product: Product,
};

// Create the server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

// Start the standalone server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
