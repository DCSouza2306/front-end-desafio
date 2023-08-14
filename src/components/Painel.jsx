import { styled } from "styled-components";

export function Painel(props) {
 return <PainelDiv>{props.children}</PainelDiv>;
}

const PainelDiv = styled.div`
 width: 1224px;
 height: 528px;
 background-color: #ffffff;
 border-radius: 16px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 48px 96px;
 overflow-y: scroll;
 overflow-x: hidden;
`;
