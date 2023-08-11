import styled from "styled-components";

export function Background(props) {
 return <BackgroundSection>{props.children}</BackgroundSection>;
}

const BackgroundSection = styled.section `
    
    background-image: linear-gradient(180deg, rgb(2,134,231), rgba(84, 255, 245, 0.4));
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
