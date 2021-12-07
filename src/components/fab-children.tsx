import * as React from "react";
import styled from "@emotion/styled";
// import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Favorite from "@mui/icons-material/Favorite";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import { mqGreater } from "../utils/media";

interface IFabs {
  // catching: boolean;
  remove: boolean;
  onCatch?: () => void;
  onRemove?: () => void;
}

const Styled = {
  FabWrapper: styled.div`
    position: fixed;
    width: 100%;
    bottom: 50px;
    // right: 5px;
    // height: 100%;
    display: flex;
    justify-content: center;

    ${mqGreater["sm"]} {
      max-width: 35rem;
    }
    ${mqGreater["md"]} {
      max-width: 35rem;
    }

    &&& {
      .fabChildren {
        .MuiSpeedDial-fab {
          background: ${(props) => props.theme.colors.lightmedium};
        }
      }

      .MuiSpeedDialAction-staticTooltipLabel {
        font-size: 13px;
        color: black;
        display: flex;
        min-width: fit-content;
      }
    }
  `,
};

const actions = [
  {
    icon: <RemoveCircleOutlineIcon />,
    name: "Release Pokemon",
    for: "remove",
  },
  {
    icon: <CatchingPokemonIcon color="error" />,
    name: "Catch Pokemon!",
    for: "catch",
  },
];

const FabChildren: React.FC<IFabs> = ({ remove, onCatch, onRemove }) => {
  return (
    <Styled.FabWrapper>
      {/* <Box sx={{ position: "fixed", transform: "translateZ(0px)", flexGrow: 1 }}> */}
      <SpeedDial
        className="fabChildren"
        ariaLabel="fabChildren"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Favorite style={{ color: "black" }} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            title={action.name}
            onClick={() =>
              action.for === "catch" ? onCatch?.() : onRemove?.()
            }
            style={{
              display: action.for === "remove" && !remove ? "none" : "",
            }}
          />
        ))}
      </SpeedDial>
      {/* </Box> */}
    </Styled.FabWrapper>
  );
};

export default FabChildren;
