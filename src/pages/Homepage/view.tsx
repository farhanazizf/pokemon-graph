import React from "react";
// import { MainLayout } from "../../components/main-layout";
import useToast from "../../components/toast";
// import Styled from "./styling";
import { Styled, SkeletonCard } from "./style";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GlobalContext from "../../context/global-context";
import { usePokemon } from "./service";
import { CircularProgress } from "@mui/material";

const CardPokemon = React.lazy(() => import("./style"));

const HomepageView: React.FC = () => {
  const history = useHistory();
  const [Toast, setToast] = useToast();
  const { pets } = React.useContext(GlobalContext);

  const { loading, error, pokemons, fetchMore } = usePokemon();

  if (error) setToast({ message: error.message });

  const idPokemon = (word: string) => {
    let id = word.slice(0, -1).split("/").pop() || "";

    if (id?.length > 3) {
      return id || "-";
    }

    return ("00" + word.slice(0, -1).split("/").pop())?.slice(-3) || "-";
  };

  const upperFirst = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const countOwned = (pokemon: string) => {
    const checkOwned = pets?.filter((val) => val.pokemon === pokemon);

    return checkOwned?.length || 0;
  };

  return (
    <React.Fragment>
      <Toast />
      <Styled.SectionList>
        <div className="listTitle">
          <p>List Pokemon || {pokemons?.pokemons.results.length}</p>
        </div>

        <InfiniteScroll
          dataLength={(pokemons?.pokemons.results.length || 20) * 20}
          pullDownToRefreshThreshold={100}
          next={() =>
            fetchMore({
              variables: {
                offset: (pokemons?.pokemons.results.length || 20) + 1,
              },
            })
          }
          hasMore={
            (pokemons?.pokemons?.results?.length || 0) <
            (pokemons?.pokemons.count || 0)
          }
          loader={
            <div className="listWrapper">
              {[...Array(2)].map((_, ix) => (
                <SkeletonCard key={ix} />
              ))}
            </div>
          }
        >
          <div className="listWrapper">
            <React.Suspense fallback={<CircularProgress />}>
              {loading && !pokemons
                ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
                : pokemons?.pokemons.results?.map((val, i) => (
                    <CardPokemon
                      id={idPokemon(val.url)}
                      url={val.image}
                      name={upperFirst(val.name)}
                      key={i}
                      owned={countOwned(val.name)}
                      onClick={() => history.push(`/pokemon/${val.name}`)}
                    />
                  ))}
            </React.Suspense>
          </div>
        </InfiniteScroll>
      </Styled.SectionList>
    </React.Fragment>
  );
};

export default HomepageView;
