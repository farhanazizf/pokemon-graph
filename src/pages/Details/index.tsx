import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { CircularProgress, Skeleton } from "@mui/material";
import { MainLayout } from "../../components/main-layout";
import GlobalContext from "../../context/global-context";
import { usePokemonDetail } from "./service";
import Styled, {
  ModalChoice,
  ModalConfirm,
  ModalNickname,
  StatsInfo,
} from "./style";
import BasicTabs, { TabPanel } from "../../components/tabs";
import { IConfirm, initialTab } from "./types";
import FabChildren from "../../components/fab-children";
import { IPets } from "../../context/types";
import useToast from "../../components/toast";
import { uuid } from "../../utils/uid";

const initialModal = { visible: false, success: false };

const Detail: React.FC = () => {
  const history = useHistory();
  const [Toast, setToast] = useToast();
  const { name, id } = useParams<{ name: string; id?: string }>();
  const { pets, onSelectPets, onRemovePets } = React.useContext(GlobalContext);
  const { pokemons, loading, error } = usePokemonDetail(name);
  const [tabValue, setTabValue] = React.useState<string>(
    initialTab[0].category
  );
  const [modal, setModal] = React.useState({
    ...initialModal,
    catching: false,
  });
  const [visibleList, setVisibleList] = React.useState(initialModal);
  const [confirm, setConfirm] = React.useState<IConfirm>({
    visible: false,
    id: "",
    nickname: "",
  });

  const myPets = id
    ? pets.filter((val) => val.id === id)
    : pets.filter((val) => val.pokemon === pokemons?.pokemon.name);

  if (error) setToast({ message: error.message });

  const idPokemon = (id: string) => {
    // let id = word.slice(0, -1).split("/").pop() || "";

    if (id.length > 3) {
      return id || "-";
    }

    return `00${id}` || "-";
  };

  const upperFirst = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleChange = (newValue: string) => {
    setTabValue(newValue);
  };

  const probabilityCatch = () => {
    let d = Math.random();
    setModal({ visible: true, success: true, catching: true });

    setTimeout(() => {
      if (d < 0.5) {
        // 50% chance of being here
        setModal({ visible: true, success: true, catching: false });
      } else {
        setModal({ visible: true, success: false, catching: false });
      }
    }, 2000);
  };

  const tryCatchPokemon = (
    e: React.FormEvent<HTMLFormElement>,
    nickname: string
  ) => {
    e.preventDefault();

    if (pokemons) {
      const {
        name,
        sprites: { front_default: image },
      } = pokemons.pokemon;

      onSelectPets({
        id: uuid(),
        nickname,
        image,
        pokemon: name,
      });

      setModal({ ...initialModal, catching: false });
      history.push(`/my-pokemon`);
    }
  };

  const triggerRemove = (myPets: IPets[]) => {
    if (pokemons) {
      if (myPets.length < 2) {
        setConfirm({
          visible: true,
          id: myPets[0].id,
          nickname: myPets[0].nickname,
        });
      } else {
        setVisibleList({ ...visibleList, visible: true });
      }
    }
  };

  const removePokemon = (id: string | number, nickPokemon: string) => {
    if (pokemons) {
      const {
        name,
        sprites: { front_default: image },
      } = pokemons.pokemon;

      onRemovePets({
        id,
        nickname: nickPokemon,
        image,
        pokemon: name,
      });
      setVisibleList({ success: true, visible: true });
      history.push(`/pokemon/${pokemons.pokemon.name}`);
    }
  };

  return (
    <MainLayout backButton>
      <Toast />

      <ModalConfirm
        visible={confirm.visible}
        onDismiss={() => setConfirm({ ...confirm, visible: false })}
        onAgree={() => removePokemon(confirm.id, confirm.nickname)}
        title="Are you sure want to remove this pokemon?"
      />

      <ModalNickname
        visible={modal.visible}
        success={modal.success}
        catching={modal.catching}
        onDismiss={() => setModal({ ...modal, visible: false })}
        onSubmit={(e, nick: string) => tryCatchPokemon(e, nick)}
        type={pokemons?.pokemon.types[0].type.name}
      />

      <ModalChoice
        listPokemon={myPets}
        visible={visibleList.visible}
        onDismiss={() => setVisibleList(initialModal)}
        type={pokemons?.pokemon.types[0].type.name}
        onRemove={(id, nickname) => setConfirm({ visible: true, id, nickname })}
        success={visibleList.success}
      />

      <Styled.SectionDetails>
        <Styled.BackgroundWrapper
          pokemonType={pokemons?.pokemon.types[0].type.name || "unknown"}
        />

        <Styled.AvatarWrapper>
          {loading && !pokemons ? (
            <Styled.HeadWrap>
              <Skeleton variant="text" width={150} sx={{ bgcolor: "white" }} />
              <Skeleton variant="text" width={150} sx={{ bgcolor: "white" }} />
            </Styled.HeadWrap>
          ) : (
            <Styled.HeadWrap>
              <p className="pokemonName">
                #{idPokemon(`${pokemons?.pokemon.id}`)} |&nbsp;
                {upperFirst(pokemons?.pokemon.name || "")}
              </p>
              {/* <div className="nickWrap">
                {myPets.map((val) => (
                  <p key={val.id}>{val.nickname}</p>
                ))}
              </div> */}
              {myPets.length > 0 ? (
                <div className="ownedWrap">
                  <p>OWNED</p>
                  <p className="quantity">
                    {id
                      ? pets.filter(
                          (val) => val.pokemon === pokemons?.pokemon.name
                        ).length
                      : myPets.length}
                  </p>
                </div>
              ) : null}
            </Styled.HeadWrap>
          )}
          {myPets.length > 0 ? (
            <div className="flexWrap">
              <p>Nickname: </p>

              <div className="nickWrap">
                {myPets.map((val) => (
                  <p key={val.id}>| {val.nickname} |</p>
                ))}
              </div>
            </div>
          ) : null}
          <Styled.OverlapWrap>
            {loading && !pokemons ? (
              <Styled.LoadingWrapper>
                <CircularProgress />
              </Styled.LoadingWrapper>
            ) : (
              <img
                className="pokemonAvatar"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons?.pokemon.id}.png`}
                alt={pokemons?.pokemon.name}
              />
            )}
          </Styled.OverlapWrap>
        </Styled.AvatarWrapper>

        <Styled.DescWrap>
          <Styled.FlexWrap>
            {pokemons?.pokemon.types.map((val, i) => (
              <Styled.ChipPokemon key={i} pokemonType={val.type.name}>
                {val.type.name}
              </Styled.ChipPokemon>
            ))}
          </Styled.FlexWrap>

          <Styled.TabWrapper>
            <BasicTabs
              tabName={initialTab}
              value={tabValue}
              onChange={(_, val) => handleChange(val)}
              mainColors={pokemons?.pokemon.types[0].type.name}
            >
              {initialTab.map((val, i) => (
                <TabPanel
                  index={i}
                  selected={tabValue === val.category}
                  key={i}
                >
                  {val.category === "moves" ? (
                    <Styled.FlexWrap wrap="wrap">
                      {pokemons?.pokemon.moves.map((val, i) => (
                        <Styled.ChipMoves
                          key={i}
                          pokemonType={pokemons?.pokemon.types[0].type.name}
                        >
                          {val.move.name}
                        </Styled.ChipMoves>
                      ))}
                    </Styled.FlexWrap>
                  ) : (
                    <React.Fragment>
                      {pokemons?.pokemon?.stats.map((val, i) => (
                        <StatsInfo
                          key={i}
                          statName={val.stat.name}
                          value={val.base_stat}
                          type={pokemons?.pokemon.types[0].type.name}
                        />
                      ))}
                    </React.Fragment>
                  )}
                </TabPanel>
              ))}
            </BasicTabs>
          </Styled.TabWrapper>
        </Styled.DescWrap>
        <FabChildren
          remove={myPets.length > 0}
          onCatch={() => probabilityCatch()}
          onRemove={() => triggerRemove(myPets)}
        />
      </Styled.SectionDetails>
    </MainLayout>
  );
};

export default Detail;
