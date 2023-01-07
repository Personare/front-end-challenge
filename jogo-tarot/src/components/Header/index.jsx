import { Container } from "./style";
import { useContext } from "react";
import { CardContext } from "../../contexts/cardContext";
import { Button } from "../Button/style";

const Header = () => {
    const { flip, handleFlipCard } = useContext(CardContext);

    return (
        <Container>
            <h1>
                {flip
                    ? "Clique no botão abaixo para iniciar o jogo!"
                    : "Para saber o que o futuro te reserva, basta passar o mouse na carta desejada."}
            </h1>
            {flip ? (
                <Button onClick={handleFlipCard}>
                    {flip ? "Iniciar." : ""}
                </Button>
            ) : (
                ""
            )}
        </Container>
    );
};

export default Header;
