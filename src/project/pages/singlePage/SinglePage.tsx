import React from "react";
import CityContent from "../../components/cityWeather/cityContent/CityContent";
import * as Style from "./SinglePage.style";

const SinglePage:React.FC = () => {

    return(
        <Style.CityContentWrapper>
            <CityContent/>
        </Style.CityContentWrapper>
    )
}
export default SinglePage