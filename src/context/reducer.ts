import React from "react";
import { getStorageValue, setStorageValue } from "../utils/local-storage";
import { IPets } from "./types";

const PetsContext = (pets?: IPets) => {
  const checkPersist = getStorageValue("poke", []);
  const [petsList, setPetsList] = React.useState<IPets[]>(checkPersist);

  const petsAdd = (pets: IPets) => {
    const checkSame = petsList.filter(
      (val) => val.nickname === pets?.nickname && val.pokemon === pets?.pokemon
    );
    if (pets && checkSame.length === 0) {
      setPetsList([...petsList, pets]);
      setStorageValue("poke", [...petsList, pets], petsList);
    }
  };

  const petsRemove = (pets: IPets) => {
    const removeChoosen = petsList.filter((val) => val.id !== pets.id);
    if (pets) {
      setPetsList(removeChoosen);
      setStorageValue("poke", removeChoosen, petsList);
    }
  };

  return { petsList, petsAdd, petsRemove };
};

export default PetsContext;
