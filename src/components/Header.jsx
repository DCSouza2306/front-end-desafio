import { styled } from "styled-components";
import logo from "../assets/images/logo.png";
import Search from "antd/es/input/Search";
import { ConfigProvider } from "antd";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import React from 'react';

export function Header() {
 const [input, setInput] = useState("");
 const navigate = useNavigate();
 const userData = localStorage.getItem("userData");

 function navigateLogin() {
  navigate("/login");
 }

 function logout(){
    window.localStorage.clear();
    navigate("/");
 }
 return (
  <ConfigProvider
   theme={{
    token: {
     colorPrimary: "#0286E7",
     fontFamily: "Raleway",
    },
   }}
  >
   <HeaderDiv>
    <Icon>
     <img src={logo} />
     <h2>Meu Tempo</h2>
    </Icon>

    <Search
     className="search-input"
     placeholder="Digite aqui a cidade"
     enterButton="Adicionar"
     size="large"
     value={input}
     onChange={(e) => setInput(e.target.value)}
    />
    {!userData ? (
     <p onClick={() => navigateLogin()}>Entrar/Cadastrar</p>
    ) : (
        <p onClick={() => logout()} >Sair</p>
    )}
   </HeaderDiv>
  </ConfigProvider>
 );
}

const HeaderDiv = styled.div`
 width: 1224px;
 height: 80px;
 background-color: #ffffff;
 border-radius: 16px;
 margin-bottom: 32px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 40px 0 40px;

 .search-input {
  width: 640px;
 }

 p {
  font-size: 1.2em;
  cursor: pointer;
 }
`;

const Icon = styled.div`
 img {
  width: 64px;
  height: 64px;
 }
 display: flex;
 align-items: center;

 h2 {
  font-family: "Inria Serif", serif;
  font-size: 1.6em;
  margin-left: 16px;
  white-space: nowrap;
 }
`;
