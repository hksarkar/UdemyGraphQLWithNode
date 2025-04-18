const { gql } = require("graphql-tag");

// The GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    category: Category
    reviews: [Review!]
  }

  type Category {
    id: ID!
    name: String
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;

module.exports = { typeDefs };
