import { styled } from "styled-components";
import loginImage from "../assets/images/login.jpg";
import searchImage from "../assets/images/pesquisa.jpg";
import peopleImage from "../assets/images/pessoa trabalhando.png";

export function Steps() {
 return (
  <StepsDiv>
   <div>
    <img src={loginImage} />
    <p>Cadastre uma conta ou faça o login</p>
   </div>
   <div>
    <img src={searchImage} />
    <p>Pesquise por alguma cidade que deseja acompanhar o tempo</p>
   </div>
   <div>
    <img src={peopleImage} />
    <p>Acompanhe na tela as principais informações do tempo</p>
   </div>
  </StepsDiv>
 );
}

const StepsDiv = styled.div `
display: flex;
width: 1032px;
justify-content: space-between;
div{
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 316px;
    text-align: center;
}
img{
    height: 200px;
    margin-bottom: 64px;
}
`
