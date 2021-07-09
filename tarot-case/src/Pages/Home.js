
import { Body } from "../Styled/styledPages"
import { goToTable } from "../Router/cordination"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';

const Home = () => {

    const history = useHistory();

    const jogar = () => {
        goToTable(history)
    }

    return (
        <Body>

            <h1> BEM VIND@!</h1>
            <h3>Está preparad@ para ver o seu futuro?</h3>
            <p>Como Funciona?</p>
            <li>Para começar, clique em embaralhar</li>
            <li>Escolha uma carta e clique nela para ver o que ela lhe diz</li>
            <li>Para voltar ao tabuleiro principal basta clicar novamente em cima da carta que apareceu.</li>
          <p> obs: As cartas são embaralhadas novamente sempre que você volta ao tabuleiro principal</p>
            <hr/>
            <h3> Vamos lá!</h3>
            <Button onClick={jogar}
                variant="contained" color="primary">START</Button>
        </Body>

    )
}
export default Home