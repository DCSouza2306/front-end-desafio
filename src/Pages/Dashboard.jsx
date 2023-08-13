import { Background } from "../components/Background";
import { Painel } from "../components/Painel";
import { Header } from "../components/Header";
import { City } from "../components/City";
import { useCities } from "../hooks/api/useCities";

export function Dashboard() {
 const userData = JSON.parse(localStorage.getItem("userData"));
 const token = userData.token;

 const { citiesData } = useCities(token);

 console.log(citiesData);
 return (
  <>
   <Background>
    <Header />
    <Painel>
     {citiesData?.map((e) => {
      return (
       <City
        key={e.id}
        name={e.name}
        country={e.country}
        temp={e.temp}
        weather={e.description}
        humidity={e.humidity}
        icon={e.icon}
       />
      );
     })}
    </Painel>
   </Background>
  </>
 );
}
