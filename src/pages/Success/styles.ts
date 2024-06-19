import styled from "styled-components";


export const SuccessContainer = styled.div`
    header {
        margin-bottom: 2rem;

        @media(min-width: 1024px) {
            margin-bottom: 5rem;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        @media(min-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            gap: 0;
        }

        > div > h1 {
            color: ${({ theme }) => theme["yellow-900"]};
            font-size: 2rem;
            font-family:'Baloo 2', sans-serif;
        }

        > div > p {
            color: ${({ theme }) => theme["base-subtitle"]};
            font-size: 1.25rem;
        }

        img {

            @media(max-width: 800px) {
                width: 25rem;
            }
            
        }
    }


`;


export const ClientOrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.5rem;
    padding: 2.5rem;


    @media(max-width: 800px) {
        margin-top: 1.5rem;
        gap: 1.5rem;
    }

    border: 2px solid ${({ theme }) => theme["yellow-900"]};
    border-radius: 6px 36px 6px 36px;
`;


const BENEFITS_ICON_BG_COLOR = {
    yellowDark: 'yellow-900',
    yellow: 'yellow-500',
    purple: 'purple-500',
  } as const
  
  interface IconProps {
    $iconbgcolor: keyof typeof BENEFITS_ICON_BG_COLOR
  }

export const ClientOrderSummaryWrapper = styled.div<IconProps>`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .75rem;

  .iconContainer {
    display: flex;
    align-items: center;
    padding: .6rem .6rem;
    border-radius: 9999px;
    background: ${({ theme, $iconbgcolor}) => theme[BENEFITS_ICON_BG_COLOR[$iconbgcolor]]};
    color: ${({ theme }) => theme.white};
  }

  .description {
    display: flex;
    flex-direction: column;    
  }

`;