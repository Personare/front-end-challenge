export interface ICard {
  name: string;
  image: string;
  show: boolean;
}

export interface IData {
  cards: ICard[];
  imageBackCard: string;
  imagesUrl: string;
}
