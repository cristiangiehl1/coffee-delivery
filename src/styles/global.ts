import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme['base-text']};

        padding: 2rem 10rem;

        @media(max-width: 900px) {
            padding: 2rem 5rem;
        }
    }

    body,
    input,
    textarea,
    button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    input:focus,
    textarea:focus {
        outline: 2px solid ${({ theme }) => theme['yellow-500']}
    }

    ::-webkit-scrollbar {
        width: .3rem; 
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme['yellow-500']};
        border-radius: 9999px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {        
        border: none;       
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme['yellow-100']} inset;
        -webkit-text-fill-color: ${({ theme }) => theme['base-text']};
        transition: background-color 5000s ease-in-out 0s;
    }
`;
