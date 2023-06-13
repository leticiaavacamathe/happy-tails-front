export interface AnimalDataStructure {
  id: string;
  name: string;
  image: string;
  type: string;
  age: number;
  city: string;
  sex: string;
  weight: number;
  description: string;
  user?: string;
}

export interface AnimalInfoStructure {
  name: string;
  image: string;
  type: string;
  age: number;
  city: string;
  sex: string;
  weight: number;
  description: string;
  user?: string;
}

export interface AnimalsStateStructure {
  animals: AnimalDataStructure[];
  selectedAnimal?: AnimalDataStructure;
}

export interface AnimalIdStructure {
  idAnimal: string;
}

export interface AnimalCreateResponse {
  animal: AnimalDataStructure;
}
