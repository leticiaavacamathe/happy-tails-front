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
}

export interface AnimalsApiResponse {
  animals: AnimalDataStructure[];
}
