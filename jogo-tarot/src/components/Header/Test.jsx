// import axios from "axios";
import { useContext } from "react";
import { CardContext } from "../contexts/cardContext";

const Testes = () => {
    const { card, image_path } = useContext(CardContext);

    return (
        <>
            {card.map((card) => {
                return (
                    <div>
                        <p>{card.name}</p>
                        <img
                            src={`${image_path}${card.image}`}
                            alt={card.name}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default Testes;
