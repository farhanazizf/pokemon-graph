import { useQuery, gql } from "@apollo/client";
import { IPokemonDetails } from "./types";
// import { IPokemon } from "./types";

const GET_POKEMONS_DETAILS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const usePokemonDetail = (name: string) => {
  const gqlVariables = {
    name: name.toLowerCase(),
  };

  const {
    loading,
    error,
    data: pokemons,
  } = useQuery<IPokemonDetails>(GET_POKEMONS_DETAILS, {
    variables: gqlVariables,
    // notifyOnNetworkStatusChange: true,
  });

  return { pokemons, loading, error };
};
