import axios from "axios"


export const RequestCard = (URL_BASE, URL_BACK, image) => {

    return(
        <img src= {URL_BASE + image}/>
    )
}


