import { useQuery, gql } from "@apollo/client";
import { IPokemon } from "./types";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const usePokemon = () => {
  const gqlVariables = {
    limit: 10,
    offset: 1,
  };

  const {
    loading,
    error,
    data: pokemons,
    fetchMore,
  } = useQuery<{ pokemons: IPokemon }>(GET_POKEMONS, {
    variables: gqlVariables,
    notifyOnNetworkStatusChange: true,
  });

  return { pokemons, loading, error, fetchMore };
};
