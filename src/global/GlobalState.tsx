import { useState, useCallback } from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";
import { ICard, IData } from "../config/interfaces";
import { shuffleArray } from "../utils/cards";

const GlobalState: React.FC = ({ children }) => {
  const [data, setData] = useState<IData>({
    cards: [],
    imagesUrl: "",
    imageBackCard: "",
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStartGame, setIsStartGame] = useState(true);
  const [selectedCard, setSelectedCard] = useState<string | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get("/assets/tarot.json");

      const cards = data.cards.map((card: ICard) => ({ ...card, show: true }));

      setData({ ...data, cards });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const shuffleCards = (cards: ICard[]) => {
    const shuffledCards: ICard[] = shuffleArray(cards);
    setData((data: IData) => ({ ...data, cards: shuffledCards }));
  };

  const toggleCards = (show: boolean) => {
    const cards: ICard[] = data.cards.map((card: ICard) => ({ ...card, show }));
    setData((data: IData) => ({ ...data, cards }));

    return cards;
  };

  const selectCard = (name: string) => {
    if (selectedCard) return;

    const cards: ICard[] = data.cards.map((card: ICard) =>
      card.name === name ? { ...card, show: true } : card
    );
    setData((data: IData) => ({ ...data, cards }));
    setSelectedCard(name);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const startGame = () => {
    setIsShuffling(true);
    setIsPlaying(true);
    setSelectedCard(undefined);

    const updatedCards = toggleCards(false);

    setTimeout(() => {
      shuffleCards(updatedCards);
      setIsShuffling(false);
    }, 1000);
  };

  const state = {
    data,
    isPlaying,
    selectedCard,
    showModal,
    isShuffling,
    isStartGame,
  };
  const setters = {
    startGame,
    selectCard,
    setShowModal,
    setIsStartGame,
    closeModal,
    shuffleCards,
    setIsShuffling,
  };
  const requests = { getData };

  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
