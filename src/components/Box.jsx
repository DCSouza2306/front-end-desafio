import { styled } from "styled-components";

export function Box(props) {
 return <BoxDiv>{props.children}</BoxDiv>;
}

const BoxDiv = styled.div`
 width: 400px;
 height: 432px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 32px 16px;
 border-radius: 16px;
 border: 1px solid #0286e7;
 h3 {
  margin-bottom: 32px;
  font-size: 1.2rem;
  font-weight: 700;
 }
 button {
  background-color: #0286e7;
  width: 160px;
 }

 p {
  text-decoration: underline;
  color: #0286e7;

  cursor: pointer;
 }
`;
