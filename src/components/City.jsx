import { styled } from "styled-components";
import { CiTempHigh } from "react-icons/ci";
import { BiSolidDroplet } from "react-icons/bi";
import React from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
const { confirm } = Modal;
import { useDeleteCities } from "../hooks/api/useDeleteCity";

export function City({
 name,
 country,
 temp,
 weather,
 icon,
 humidity,
 id,
 reload,
 setReload,
}) {

 const userData = JSON.parse(localStorage.getItem("userData"));
 const token = userData.token;

 const { deleteCities, deleteCitiesLoading } = useDeleteCities();
 async function deleteSelected() {
  try {
   await deleteCities(token, id);
   setReload(!reload);
  } catch (error) {
   console.log(error);
  }
 }
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

   <Button
    style={{
     backgroundColor: "#dc6481",
     color: "#FFFFFF",
     borderColor: "#dc6481",
    }}
    onClick={() => deleteSelected()}
   >
    Excluir
   </Button>
  </CityDiv>
 );
}

const NameFlag = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 160px;
`;

const Icons = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;
const Infos = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 600px;
`;

const CityDiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 16px;
 border: 1px solid #b1b0b0;
 padding: 16px;
 width: 1032px;
 margin-bottom: 32px;
 .temp-icon {
  font-size: 32px;
  color: #0286e7;
 }
`;
