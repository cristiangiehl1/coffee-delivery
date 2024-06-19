import styled from "styled-components";


export const HomeContainer = styled.main`
    margin-top: 5.875rem;

    .homePageIntro {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 3.5rem;


        @media(max-width: 1023px) {
            flex-direction: column;
        }
        
        h1 {
            color: ${({ theme }) => theme["base-title"]};
            font-family: "Baloo 2", sans-serif;
            font-size: 3rem;
            line-height: 1.1;
        }

        p {
            font-size: 1.25rem;
            color: ${({ theme }) => theme["base-subtitle"]};
            margin: 1rem 0 4.125rem;
        }
    }

    .productsMenu {
        > h2 {
            margin-top: 6.75rem;
        }
    }
`;

export const ProductBenefitsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.25rem;

    margin-bottom: 6.75rem;

    @media(max-width: 1023px) {
        margin-bottom: 0;
    }


`;

const BENEFITS_ICON_BG_COLOR = {
    yellowDark: 'yellow-900',
    yellow: 'yellow-500',
    gray: 'base-text',
    purple: 'purple-500',
  } as const
  
  interface IconProps {
    $iconbgcolor: keyof typeof BENEFITS_ICON_BG_COLOR
  }
  

export const ProductBenefits = styled.div<IconProps>`
    display: flex;
    align-items: center;
    gap: .75rem;



    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        background: red;
        padding: .5rem;
        background: ${({ theme, $iconbgcolor}) => theme[BENEFITS_ICON_BG_COLOR[$iconbgcolor]]}
    }

    svg {
        color: ${({ theme }) => theme.background};
    }

    span {
        transition: font-weight .3s ease-in-out;
    }

    &:hover > span {
        font-weight: 900;     
    }
`;


export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
     
    align-items: center;
    justify-content: left;    
    gap: 2rem;

    margin-top: 3.375rem;     
`