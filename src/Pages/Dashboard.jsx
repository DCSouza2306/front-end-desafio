import { Background } from "../components/Background";
import { Painel } from "../components/Painel";
import { Header } from "../components/Header";
import { City } from "../components/City";
import { useCities } from "../hooks/api/useCities";
import { useEffect, useState } from "react";

export function Dashboard() {
 const userData = JSON.parse(localStorage.getItem("userData"));
 const token = userData.token;
 const [reload, setReload] = useState(false);

 useEffect(() => {
  search(token);
 }, [reload]);

 const { citiesData, search } = useCities(token);
 setInterval(function (){search(token), setReload(!reload)}, 900000)

 return (
  <>
   <Background>
    <Header reload={reload} setReload={setReload} />
    <Painel>
     {citiesData?.map((e) => {
      return (
       <City
        key={e.id}
        id={e.id}
        name={e.name}
        country={e.country}
        temp={e.temp}
        weather={e.description}
        humidity={e.humidity}
        icon={e.icon}
        reload={reload}
        setReload={setReload}
       />
      );
     })}
    </Painel>
   </Background>
  </>
 );
}
