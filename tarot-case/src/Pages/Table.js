import { useState } from "react";
import { Front } from "../Components/Front"
import {Body} from "../Styled/styledPages"
import { Back } from "../Components/Back";

const Table = () => {
  const [lado, setLado] = useState(false); 

const embaralhar = ()=>{
    setLado(!lado)
}
      

    return (
        <Body>      
                <button onClick= {embaralhar}> {lado? "Virar Tudo" : "EMBARALHAR" }</button>  
                {lado? <Back/> : <Front/> }
                               
        </Body>

    )

}
export default Table