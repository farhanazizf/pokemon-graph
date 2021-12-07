import React from "react";
import { IContext } from "./types";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const GlobalContext = React.createContext<IContext>({
  pets: [],
  onSelectPets: noop,
  onRemovePets: noop,
});

export default GlobalContext;
