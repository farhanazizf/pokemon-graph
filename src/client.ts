import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: false,
            merge(existing, incoming) {
              // console.log("exist", existing);
              // console.log("income", incoming);

              if (!incoming) return existing;
              if (!existing) return incoming; // existing will be empty the first time

              const { results, ...rest } = incoming;

              let result = rest;
              result.results = [...existing.results, ...results]; // Merge existing items with the items from incoming

              return result;
            },
          },
        },
      },
    },
  }),
});

export default client;
