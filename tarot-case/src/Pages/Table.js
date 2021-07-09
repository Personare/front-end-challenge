import { useState } from "react";
import { Front } from "../Components/Front"
import { Body } from "../Styled/styledPages"
import { Back } from "../Components/Back";
import { Button } from "@material-ui/core";


const Table = () => {
    const [lado, setLado] = useState(false);

    const embaralhar = () => {
        setLado(!lado)
    }


    return (
        <Body>
            <Button onClick={embaralhar}
                variant="contained"
                color="primary">
                {lado ? "MOSTRAR TUDO" : "EMBARALHAR"}
            </Button>
            {lado ? <Back /> : <Front />}
        </Body>

    )

}
export default Table