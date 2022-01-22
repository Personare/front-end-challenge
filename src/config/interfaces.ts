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
  isMinimal?: boolean;
}

export interface ICardList {
  cards: ICard[];
  isPlaying: boolean;
  onClick?: (name: string) => void;
}

export interface IModal {
  card: ICard;
  onClose: () => void;
}

export interface IStartGame {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface IGlobalContext {
  state: {
    data: IData;
    isPlaying: boolean;
    selectedCard: string | undefined;
    showModal: boolean;
    isShuffling: boolean;
    isStartGame: boolean;
  };
  setters: {
    startGame: () => void;
    selectCard: (name: string) => void;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: () => void;
    shuffleCards: (cards: ICard[]) => void;
    setIsShuffling: React.Dispatch<React.SetStateAction<boolean>>;
    setIsStartGame: React.Dispatch<React.SetStateAction<boolean>>;
  };
  requests: {
    getData: () => Promise<void>;
  };
}
