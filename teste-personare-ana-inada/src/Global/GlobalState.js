import { BASE_URL } from "./BASE_URL";

const GlobalState = (props) => {
    const getCards = (card) => {
        axios
            .get(
                `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano${card}.jpg`
            )
            .then((response) => {});
    };
};
