import React from "react";
import Content from "../../components/locationWeather/Content/Content";
import * as Style from "./Home.style";

const Weather:React.FC = () => {
    
    return(
        <Style.ContentWrapper>  
           <Content/>
        </Style.ContentWrapper>
    )
}

export default Weather