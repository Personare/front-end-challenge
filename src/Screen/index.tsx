import { useContext, useEffect } from "react";
import CardList from "../components/CardList";
import Modal from "../components/Modal";
import StartGame from "../components/StartGame";
import { PlayButton } from "../components/StartGame/styles";
import { ICard } from "../config/interfaces";
import GlobalContext from "../global/GlobalContext";
import { Container, Message } from "./styles";

const Screen: React.FC = () => {
  const {
    state: {
      data,
      isPlaying,
      selectedCard,
      showModal,
      isShuffling,
      isStartGame,
    },
    setters: {
      startGame,
      setIsStartGame,
      selectCard,
      setShowModal,
      closeModal,
    },
    requests: { getData },
  } = useContext(GlobalContext);

  useEffect(() => {
    getData();
  }, [getData]);

  const handlePlayButtonClick = () => {
    startGame();
  };

  const handleChangeComponent = () => {
    setIsStartGame(false);
  };
  const renderActionButton = (label: string) => (
    <PlayButton
      type="button"
      onClick={handlePlayButtonClick}
      data-cy="action-button"
    >
      {label}
    </PlayButton>
  );

  const renderHeader = () => {
    if (selectedCard) {
      return renderActionButton("Jogar novamente");
    }

    if (isShuffling) {
      return (
        <Message data-cy="shuffling-cards-text">Embaralhando cartas...</Message>
      );
    }

    if (isPlaying) {
      return <Message data-cy="choose-a-card-text">Escolha uma carta</Message>;
    }

    return renderActionButton("Embaralhar cartas");
  };

  const handleCardClick = (name: string) => {
    if (!isPlaying) return;

    if (!isShuffling && (!selectedCard || selectedCard === name)) {
      selectCard(name);
      setShowModal(true);
    }
  };

  const currentCard = data.cards.find(
    (card: ICard) => card.name === selectedCard
  );

  if (isStartGame) return <StartGame onClick={handleChangeComponent} />;

  return (
    <Container>
      {renderHeader()}
      <CardList
        isPlaying={isPlaying}
        cards={data?.cards}
        onClick={handleCardClick}
      />
      {!!currentCard && !!showModal && (
        <Modal card={currentCard} onClose={closeModal} />
      )}
    </Container>
  );
};
export default Screen;
