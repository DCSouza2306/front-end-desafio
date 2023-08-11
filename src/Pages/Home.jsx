import { Background } from "../components/Background";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";


export function Home(){
    return(
        <>
        <Background>

        <Header />
        <Dashboard />
        </Background>
        </>
    )
}