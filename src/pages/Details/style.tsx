import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  InputLabel,
  LinearProgress,
  TextField,
} from "@mui/material";
import Modals from "../../components/modal";
import { IModalChoice, IModalConfirm, IModals } from "./types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Warning from "@mui/icons-material/Warning";

export const Styled = {
  SectionDetails: styled.section`
    position: relative;
    &.::-webkit-scrollbar {
      display: none;
    }
    .flexWrap {
      display: flex;

      p {
        color: black;
        font-weight: 700;
      }
    }
    .nickWrap {
      display: flex;
      max-width: 50%;
      overflow-x: scroll;

      p {
        font-size: 13px;
        font-weight: 700;
        color: black;
        margin: 3px 2.5px;
        min-width: fit-content;
      }
    }
    .nickWrap::-webkit-scrollbar {
      height: 2px;
      // width: 12px;
    }

    .nickWrap::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      border: 0.5px solid #ffffff;
    }

    .nickWrap::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: grey;
    }
  `,
  AvatarWrapper: styled.div`
    padding: 12px 24px;
    position: relative;
    min-height: 40%;
    max-height: 40%;

    p {
      margin: 5px 0;
    }
    img.pokemonAvatar {
      max-width: 100%;
    }
    p.pokemonType {
    }
  `,
  HeadWrap: styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .nickWrap {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      max-height: 48px;
      overflow-y: scroll;

      p {
        margin: 4px 0;
        color: white;
        font-size: 13px;
      }
    }
    p.pokemonName {
      color: white;
      font-weight: 700;
      font-size: 24px;
    }
    p.pokemonId {
      color: white;
      font-weight: 700;
      font-size: 18px;
    }
    div.ownedWrap {
      background: white;
      border: 0.5px solid black;

      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      top: 5px;
      right: 5px;

      padding: 5px;
      border-radius: 8px;

      p {
        margin: 0;
        font-size: 8px;
        font-weight: 700;
      }
      p.quantity {
        font-weight: 700;
        font-size: 13px;
      }
    }
  `,
  ChipPokemon: styled.p<{ pokemonType: string }>`
    background: ${(props) =>
      props.theme.colors[`pokemon-${props.pokemonType}`]};
    padding: 5px 20px;
    margin: 0;
    margin-right: 5px;
    // margin-bottom: 5px;
    border-radius: 20px;
    color: white;
    text-transform: capitalize;
  `,
  ChipMoves: styled.p<{ pokemonType: string }>`
    background: ${(props) =>
      props.theme.colors[`pokemon-${props.pokemonType}`]};
    padding: 5px 10px;
    margin: 0;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 20px;
    font-size: 11px;
    color: white;
    text-transform: capitalize;
  `,
  OverlapWrap: styled.div`
    // position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    // max-width: 365px;
    // max-height: 365px;
  `,
  BackgroundWrapper: styled.div<{ pokemonType: string }>`
    width: 100%;
    min-height: 350px;
    max-height: 350px;
    position: absolute;
    z-index: -1;
    border-radius: 0 0 45% 45%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      ${(props) => props.theme.colors[`bg-pokemon-${props.pokemonType}`]} 40%
    );
  `,
  BorderLinearProgress: styled(LinearProgress)<{ pokemontype?: string }>`
    &&& {
      background-color: white;
      border: 0.5px solid
        ${(props) => props.theme.colors[`pokemon-${props.pokemontype}`]};
      border-radius: 5px;
      height: 10px;

      .MuiLinearProgress-bar {
        background-color: ${(props) =>
          props.theme.colors[`pokemon-${props.pokemontype}`]};
      }
    }
  `,
  FlexWrap: styled.div<{ pokeType?: string; wrap?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: ${(props) => props.wrap ?? ""};

    div.infoWrapper {
      text-align: center;
      h2 {
        font-size: 18px;
        text-transform: capitalize;
      }
      p {
        font-size: 15px;
        color: ${(props) =>
          props.theme.colors[`pokemon-${props.pokeType || "unknown"}`]};
      }
    }
    div {
      color: ${(props) =>
        props.theme.colors[`pokemon-${props.pokeType || "unknown"}`]};
    }
    div.statName {
      min-width: 20%;
      max-width: 20%;
      text-transform: capitalize;
    }
    div.statsVal {
      width: 10%;
      font-weight: 700;
    }
    div.statsIndicator {
      width: 50%;
    }
  `,
  DescWrap: styled.div`
    padding: 12px 24px;
  `,
  Divider: styled.div<{ pokemonType: string; height?: string }>`
    border: 0.3px solid
      ${(props) => props.theme.colors[`pokemon-${props.pokemonType}`]};
    height: ${(props) => props.height ?? "100px"};
    margin: 0 30px;
  `,
  TabWrapper: styled.div`
    margin-top: 20px;

    .tabsz {
      font-size: 15px;
    }
    .tabsz.Mui-selected {
      font-weight: 700;
    }
    div.aboutWrapper {
      p.flavour {
        margin-top: 40px;
      }
    }
  `,
  LoadingWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    min-width: 350px;
  `,
  ModalWrapper: styled.div`
    padding: 10px;

    .messageWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        &.success {
          color: ${(props) => props.theme.colors.success};
        }
        &.fail {
          color: ${(props) => props.theme.colors.danger};
        }
        &.warning {
          color: ${(props) => props.theme.colors.warning};
        }
        font-size: 48px;
      }

      p.message {
        font-size: 15px;
        text-align: center;
      }
    }
    div.listWrapper {
      h3 {
        margin-top: 0;
      }
      p.subtitle {
        font-size: 15px;
        margin: 0 0 20px;
      }
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `,
  DeleteWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
  `,
  Button: styled(Button)`
    &&& {
      text-transform: none;
      box-shadow: none;
      border-radius: 8px;
      &.button-agree {
        margin-left: 5px;
        background: ${(props) => props.theme.colors.danger};
      }
      &.button-no {
        background: ${(props) => props.theme.colors.medium};
      }
    }
  `,
  ListItem: styled.div<{ type: string }>`
    display: flex;
    border: 1px solid ${(props) => props.theme.colors[`pokemon-${props.type}`]};
    padding: 10px 5px;
    margin: 5px 0;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;

    .nameWrap {
      width: 100%;
      font-weight: 600;

      p.pokemonName {
        margin: 0px;
      }
    }
  `,
  AnimationWrapper: styled.div<{ type?: string }>`
    // animation loading
    p {
      margin-bottom: 0;
      text-align: center;
    }
    .loadWrapper {
      position: relative;
      height: 64px;

      .loader {
        position: absolute;
        top: calc(50% - 32px);
        left: calc(50% - 32px);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        perspective: 800px;
      }

      .inner {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      .inner.one {
        left: 0%;
        top: 0%;
        animation: rotate-one 1s linear infinite;
        border-bottom: 3px solid
          ${(props) => props.theme.colors[`pokemon-${props.type}`]};
      }

      .inner.two {
        right: 0%;
        top: 0%;
        animation: rotate-two 1s linear infinite;
        border-right: 3px solid
          ${(props) => props.theme.colors[`pokemon-${props.type}`]};
      }

      .inner.three {
        right: 0%;
        bottom: 0%;
        animation: rotate-three 1s linear infinite;
        border-top: 3px solid
          ${(props) => props.theme.colors[`pokemon-${props.type}`]};
      }

      @keyframes rotate-one {
        0% {
          transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
      }

      @keyframes rotate-two {
        0% {
          transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
      }

      @keyframes rotate-three {
        0% {
          transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
      }
    }
  `,
};

export const CustomizedProgressBars: React.FC<{
  value: number;
  pokemonType?: string;
}> = ({ value, pokemonType }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Styled.BorderLinearProgress
        variant="determinate"
        value={value}
        pokemontype={pokemonType}
      />
    </Box>
  );
};
export const StatsInfo: React.FC<{
  type: string;
  value: number;
  statName: string;
}> = ({ type, value, statName }) => {
  return (
    <Styled.FlexWrap pokeType={type}>
      <div className="statName">
        <p>{statName}</p>
      </div>
      <Styled.Divider height="70px" pokemonType={type || "unknown"} />
      <div className="statsVal">
        <p>{value}</p>
      </div>
      <div className="statsIndicator">
        <CustomizedProgressBars
          value={(100 / 200) * value}
          pokemonType={type || "unknown"}
        />
      </div>
    </Styled.FlexWrap>
  );
};

export const AnimationLoading: React.FC<{ type?: string }> = ({ type }) => {
  return (
    <Styled.AnimationWrapper type={type}>
      <div className="loadWrapper">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>

      <p>Trying catch the pokemon...</p>
    </Styled.AnimationWrapper>
  );
};

export const ModalNickname: React.FC<IModals> = ({
  visible,
  success,
  catching,
  type,
  onDismiss,
  onSubmit,
}) => {
  const [name, setName] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(event, name);

    setName("");
  };

  return (
    <Modals visible={visible} onDismiss={onDismiss} hideCloseIcon={success}>
      <Styled.ModalWrapper>
        {!catching ? (
          <React.Fragment>
            {success ? (
              <div className="messageWrapper">
                <CheckCircleOutlineIcon className="success" />

                <p className="message">
                  Congratulations! You success catch the pokemon, please give
                  nickname.
                </p>
              </div>
            ) : (
              <div className="messageWrapper">
                <HighlightOffIcon className="fail" />

                <p className="message">
                  Your fail catch the pokemon. please try again later.
                </p>
              </div>
            )}

            {success ? (
              <form onSubmit={(e) => handleSubmit(e)}>
                <InputLabel id={`label-nickname`}>Nickname</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  autoComplete="off"
                  inputProps={{ maxLength: 10 }}
                />

                <Styled.ButtonWrapper>
                  <Styled.Button variant="contained" type={"submit"} fullWidth>
                    Submit
                  </Styled.Button>
                </Styled.ButtonWrapper>
              </form>
            ) : (
              <Styled.ButtonWrapper>
                <Styled.Button
                  variant="contained"
                  type={"button"}
                  onClick={onDismiss}
                  fullWidth
                >
                  Close
                </Styled.Button>
              </Styled.ButtonWrapper>
            )}
          </React.Fragment>
        ) : (
          <AnimationLoading type={type || "unknown"} />
        )}
      </Styled.ModalWrapper>
    </Modals>
  );
};

export const ModalChoice: React.FC<IModalChoice> = ({
  visible,
  type,
  listPokemon,
  success,
  onRemove,
  onDismiss,
}) => {
  return (
    <Modals visible={visible} onDismiss={onDismiss}>
      <Styled.ModalWrapper>
        {success ? (
          <React.Fragment>
            <div className="messageWrapper">
              <CheckCircleOutlineIcon className="success" />

              <p className="message">Success remove pokemon</p>
            </div>

            <Styled.ButtonWrapper>
              <Styled.Button
                variant="contained"
                type={"button"}
                onClick={onDismiss}
                fullWidth
              >
                Close
              </Styled.Button>
            </Styled.ButtonWrapper>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {listPokemon.length > 1 ? (
              <div className="listWrapper">
                <h3>My {listPokemon[0].pokemon}</h3>
                <p className="subtitle">
                  Please select your pokemon pets that you want to remove.
                </p>
                {listPokemon.map((val, i) => (
                  <Styled.ListItem
                    type={type || "unknown"}
                    key={i}
                    onClick={() => onRemove(val.id, val.nickname)}
                  >
                    <div className="nameWrap">
                      <p className="pokemonName">{val.nickname}</p>
                    </div>
                  </Styled.ListItem>
                ))}
              </div>
            ) : null}
          </React.Fragment>
        )}
      </Styled.ModalWrapper>
    </Modals>
  );
};

export const ModalConfirm: React.FC<IModalConfirm> = ({
  visible,
  title,
  onAgree,
  onDismiss,
}) => {
  const handleAgree = () => {
    onAgree();
    onDismiss();
  };
  return (
    <Modals visible={visible} onDismiss={onDismiss}>
      <Styled.ModalWrapper>
        <div className="messageWrapper">
          <Warning className="warning" />

          <p className="message">{title}</p>
        </div>

        <Styled.ButtonWrapper>
          <Styled.Button
            className="button-no"
            variant="contained"
            type={"button"}
            onClick={onDismiss}
            fullWidth
          >
            No
          </Styled.Button>
          <Styled.Button
            className="button-agree"
            variant="contained"
            type={"button"}
            onClick={handleAgree}
            fullWidth
          >
            Yes
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.ModalWrapper>
    </Modals>
  );
};

export const ImagePokemon: React.FC<{ name: string; id: string | number }> = ({
  name,
  id,
}) => {
  return (
    <img
      className="pokemonAvatar"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      alt={name}
    />
  );
};

// export default ImagePokemon;
