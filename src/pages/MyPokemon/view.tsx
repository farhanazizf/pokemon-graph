import React from "react";
import { useHistory } from "react-router-dom";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { Styled, SkeletonCard } from "../Homepage/style";
import GlobalContext from "../../context/global-context";
import Spinner from "../../components/loader";

const CardPokemon = React.lazy(() => import("../Homepage/style"));

const MyPokemon: React.FC = () => {
  const history = useHistory();
  const { pets } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(true);

  const upperFirst = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <React.Fragment>
      <Styled.SectionList>
        <div className="listTitle">
          <p>My Pokemon</p>
        </div>

        <div className="listWrapper">
          <React.Suspense fallback={<Spinner />}>
            {loading
              ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
              : pets.map((val, i) => (
                  <CardPokemon
                    id={val.pokemon}
                    url={val.image}
                    name={upperFirst(val.nickname)}
                    key={i}
                    onClick={() =>
                      history.push(`/pokemon/${val.pokemon}/${val.id}`)
                    }
                  />
                ))}
          </React.Suspense>
        </div>
        {pets.length === 0 ? (
          <div className="emptyWrap">
            <NotInterestedIcon />
            <p>You dont have any pokemon, go catch</p>
          </div>
        ) : null}
      </Styled.SectionList>
    </React.Fragment>
  );
};

export default MyPokemon;
