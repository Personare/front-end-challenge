import { useContext, useHistory } from "react"
import { Body } from "../Styled/styledPages"
import { ContextoCartas } from "../Globais/GlobalContext"
import { goToTable } from "../Router/cordination"

const Home = () => {
    const { getInfo } = useContext(ContextoCartas);

    const history = useHistory();

    goToTable(history)

    return (
        <Body>
            <button onClick={goToTable}>START</button>
        </Body>

    )
}
export default Home