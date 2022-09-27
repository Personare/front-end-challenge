import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CARDS } from "../cards";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

// Função para randomizar array
function embaralhar(cards) {
    // Loop em todos os elementos
    for (let i = cards.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    // Retornando array com aleatoriedade
    return cards;
}

export const Home = () => {
    const [cards, setCards] = useState(CARDS.cards);
    const [newCard, setNewCard] = useState();
    const changeCard = (card) => {
        setNewCard(card);
        embaralhar(cards);
    };
    const handleClose = () => {
        setNewCard();
    };

    useEffect(() => {
        setCards(embaralhar(cards));
    }, []);
    return (
        <Box sx={{ width: "100%" }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 1, sm: 4, md: 8, lg: 13 }}
            >
                {cards.map((card) => (
                    <Grid item key={card.name} xs={1}>
                        <Item>
                            <img
                                onClick={() => changeCard(card)}
                                src={CARDS.imageBackCard}
                            ></img>
                        </Item>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={!!newCard}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        p: 6,
                        backgroundColor: "white",
                        width: 0.8,
                        margin: "auto",
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {newCard?.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                    <img src={`${CARDS.imagesUrl}${newCard?.image}`}></img>
                </Box>
            </Modal>
        </Box>
    );
};

export default Home;
