import React from "react";
import { useHistory } from "react-router-dom";
import { MainLayout } from "../../components/main-layout";
import Styled, { CardPokemon, SkeletonCard } from "../Homepage/style";
import GlobalContext from "../../context/global-context";

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
    }, 500);
  }, []);

  return (
    <MainLayout>
      <Styled.SectionList>
        <div className="listTitle">
          <p>My Pokemon</p>
        </div>

        <div className="listWrapper">
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
        </div>
      </Styled.SectionList>
    </MainLayout>
  );
};

export default MyPokemon;
