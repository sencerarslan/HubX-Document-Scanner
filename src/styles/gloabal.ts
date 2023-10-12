import { createGlobalStyle } from 'styled-components';
import { fontFaces } from './font';

const GlobalStyles = createGlobalStyle`
    :root{
        --font-title-size: 56px;
        --bg-color: #F5F5F7;
        --text-color: #000;
        --cursor-color: #000;
    }
    ${fontFaces} 
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        color: var(--text-color);
        background-color: var(--bg-color);
        font-family: "San Francisco", 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    }
`;

export default GlobalStyles;
