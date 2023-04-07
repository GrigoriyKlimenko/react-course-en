export type CardType = {
  id: string;
  name: string;
  image: string;
  gender: string;
  city: string;
  raceClass: string;
  date: string;
};

export type PartialCardType = Pick<CardType, 'id' | 'name' | 'image'>;
