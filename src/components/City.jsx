import { styled } from "styled-components";
import { CiTempHigh } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import {BiSolidDroplet} from "react-icons/bi";

export function City({name, country, temp, weather, icon, humidity}) {
    const apiCountryURL = "https://countryflagsapi.com/png/";
 return (
  <CityDiv>
   <Infos>
   <NameFlag>
    <p>{name}</p>
    <img src={`https://flagsapi.com/${country}/flat/32.png`} />
   </NameFlag>

   <Icons>
    <CiTempHigh color="#0286E7" className="temp-icon" />
    <p>{temp}°C</p>
   </Icons>

   <Icons>
   <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
    <p>{weather}</p>
   </Icons>

   <Icons>
    <BiSolidDroplet color="#0286E7" className="temp-icon" />
    <p>{humidity}%</p>
   </Icons>

   </Infos>
   
   <AiFillDelete className="delete-icon" />

  </CityDiv>
 );
}

const NameFlag = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 160px;
`

const Icons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Infos = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 600px;
`


const CityDiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 16px;
 border: 1px solid #B1B0B0;
 padding: 16px;
 width: 1032px;
 margin-bottom: 32px;
 .temp-icon {
  font-size: 32px;
  color: #0286e7;
 }

 .delete-icon{
    font-size: 24px;
    color: #DC6481;
 }

`;
