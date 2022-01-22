import { createContext } from "react";
import { IGlobalContext } from "../config/interfaces";

const initialState = {
  state: {
    data: {
      cards: [],
      imagesUrl: "",
      imageBackCard: "",
    },
    isPlaying: false,
    selectedCard: undefined,
    showModal: false,
    isShuffling: false,
  },
  setters: {
    startGame: () => {},
    selectCard: () => {},
    setShowModal: () => {},
    closeModal: () => {},
    shuffleCards: () => {},
    setIsShuffling: () => {},
  },
  requests: {
    getData: async () => {},
  },
};
const GlobalContext = createContext<IGlobalContext>(initialState);

export default GlobalContext;
