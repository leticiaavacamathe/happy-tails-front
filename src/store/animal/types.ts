export interface AnimalStructure {
  name: string;
  image: string;
  type: string;
  age: number;
  city: string;
  sex: string;
  weight: number;
  description: string;
}

export interface AnimalDataStructure extends AnimalStructure {
  _id: string;
}
