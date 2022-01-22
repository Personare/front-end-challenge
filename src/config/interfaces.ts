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

export interface ICardItem {
  card: ICard;
  onClick?: (name: string) => void;
}

export interface ICardList {
  cards: ICard[];
  onClick?: (name: string) => void;
}

export interface IModal {
  card: ICard;
  onClose: () => void;
}

export interface IGlobalContext {
  state: {
    data: IData;
    isPlaying: boolean;
    selectedCard: string | undefined;
    showModal: boolean;
    isShuffling: boolean;
  };
  setters: {
    startGame: () => void;
    selectCard: (name: string) => void;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: () => void;
    shuffleCards: (cards: ICard[]) => void;
    setIsShuffling: React.Dispatch<React.SetStateAction<boolean>>;
  };
  requests: {
    getData: () => Promise<void>;
  };
}
