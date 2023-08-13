import { Background } from "../components/Background";
import { Painel } from "../components/Painel";
import { Header } from "../components/Header";
import { Steps } from "../components/Steps";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export function Home(){
   const userData = localStorage.getItem("userData")
    const navigate = useNavigate();

    useEffect(() => {
        if(userData) navigate("/dashboard")
    },[])
    return(
        <>
        <Background>
        <Header />
        <Painel>
        <h3 style={{fontSize: "2.3em"}} >Acompanhe o tempo em várias cidades simultaneamente</h3>
        <Steps />
        </Painel>
        </Background>
        </>
    )
}