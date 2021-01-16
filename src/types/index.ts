export type PeopleVariables = {
  first?: number;
  after?: null | string;
};

export interface ISpecies {
  name: string;
}

export interface IHomeworld {
  name: string;
}

interface IVehicle {
  name: string;
}

interface IPageInfo {
  endCursor: string;
}

interface IVehicleConnection {
  vehicles: IVehicle[];
}

export type Person = {
  id: string;
  birthYear: string;
  name: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  vehicleConnection: IVehicleConnection;
  species?: ISpecies;
  homeworld?: IHomeworld;
};

export type PeopleList = {
  allPeople: {
    people: Person[];
    totalCount: number;
    pageInfo: IPageInfo;
  };
};
