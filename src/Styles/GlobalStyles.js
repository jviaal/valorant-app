import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        font-family: "Roboto", sans-serif;
        background-color: #ECE8E1;
    }
    html{
            font-size: 16px;
    }
`;
