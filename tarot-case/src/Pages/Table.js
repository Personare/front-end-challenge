import { useState } from "react";
import { Front } from "../Components/Front"
import { Body } from "../Styled/styledPages"
import { Back } from "../Components/Back";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import { goToHome } from "../Router/cordination";


const Table = () => {
    const [lado, setLado] = useState(false);
    const history = useHistory();

    const embaralhar = () => {
        setLado(!lado)
    }
    const logout = () => {
        goToHome(history)
    }


    return (
        <Body>
            <div>
                <Button onClick={embaralhar}
                    variant="contained"
                    color="primary">
                    {lado ? "MOSTRAR TUDO" : "EMBARALHAR"}
                </Button>

                <Button 
                    onClick={logout}
                    color="primary">Logout</Button>
            </div>
            {lado ? <Back /> : <Front />}
        </Body>

    )

}
export default Table