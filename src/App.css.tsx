import styled, {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
    html {
        width:100%;
        height:100%;
    }
    body {
        width:100%;
        height:100%;
    }

    * {
        user-select : none;
        -ms-user-select : none;
        outline : 0;
        margin : 0;
        padding : 0;
        -webkit-tap-highlight-color : rgba(0,0,0,0);
    }

    div.root{
        width:100%;
        height:100%;
    }
`;


export const Wrapper = styled.div`
    width:100%;
    height:100%;
`;