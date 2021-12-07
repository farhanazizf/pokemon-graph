export interface IPets {
  nickname: string;
  pokemon: string;
  id: string | number;
  image: string;
}

export interface IContext {
  pets: IPets[];
  onSelectPets: (pets: IPets) => void;
  onRemovePets: (pets: IPets) => void;
}
