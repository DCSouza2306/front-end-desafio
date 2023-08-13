import { Background } from "../components/Background";
import { Painel } from "../components/Painel";
import { Header } from "../components/Header";
import { City } from "../components/City";
import { useCities } from "../hooks/api/useCities";
import { useEffect, useState } from "react";
import { useDeleteCities } from "../hooks/api/useDeleteCity";

export function Dashboard() {
 const userData = JSON.parse(localStorage.getItem("userData"));
 const token = userData.token;
 const [reload, setReload] = useState(false);
 const { deleteCitiesLoading } = useDeleteCities();

 useEffect(() => {
  search(token);
 }, [reload]);
 const { citiesData, search } = useCities(token);

 return (
  <>
   <Background>
    <Header />
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
