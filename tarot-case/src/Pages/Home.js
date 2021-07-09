
import { Body } from "../Styled/styledPages"
import { goToTable } from "../Router/cordination"
import { useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';

const Home = () => {

    const history = useHistory();
    goToTable(history)

    return (
        <Body>

            <Button onClick={goToTable}
            variant="contained" color="primary">START</Button>

        </Body>

    )
}
export default Home