import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        --color-light-text: #000;
        --color-light-background: #d5fffb;
        --color-light-cta: #DC143C;
        --color-light-cta-text: #fff;

        --color-dark-text: #fff;
        --color-dark-background: #000;
        --color-dark-cta: #AEF4C9;

        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        background-color: gray;
    }
`;

export default GlobalStyle;