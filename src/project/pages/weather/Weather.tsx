import React from "react";
import Content from "../../components/locationWeather/Content/Content";
import * as Style from "./Weather.style";

const Weather:React.FC = () => {
    
    return(
        <Style.ContentItem>  
           <Content/>
        </Style.ContentItem>
    )
}

export default Weather