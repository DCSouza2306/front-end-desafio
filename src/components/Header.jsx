import { styled } from "styled-components";
import logo from "../assets/images/logo.png"
import Search from "antd/es/input/Search";

export function Header(){
    return(
        <HeaderDiv>
            <Icon>
                <img src={logo} />
                <h2>Meu Tempo</h2>
            </Icon>

            <Search className="search-input" placeholder="Digite aqui a cidade" enterButton="Adicionar" size="large"/>

            <p>Entrar/Cadastrar</p>

        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
width: 1224px;
height: 80px;
background-color: #FFFFFF;
border-radius: 16px;
margin-bottom: 32px;
display: flex;
align-items: center;
padding: 0 40px 0 40px;

.search-input{
    margin: 0 32px 0 32px;
}

p{
    font-size: 1.2em;
}
`

const Icon = styled.div`
img{
    width: 64px;
    height: 64px;
}
display: flex;
align-items: center;

h2{
    font-family: 'Inria Serif', serif;
    font-size: 1.6em;
    margin-left: 16px;
    white-space: nowrap;
}
`