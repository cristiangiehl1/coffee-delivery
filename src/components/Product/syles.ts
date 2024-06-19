import styled from 'styled-components';

export const ProductContainer = styled.figure`   
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme['base-card']};
    border-radius: 6px 36px 6px 36px;

    padding: 1.25rem;

    img {
        position: absolute;
        top: -20px;


        width: 7.5rem;
        height: 7.5rem;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;

        .price {
            font-size: .875rem;

            margin-right: 1.43rem;
            
            strong {
                font-size: 1.5rem;
                font-weight: 900;
                font-family: 'Baloo 2', sans-serif;
            }
        }
    }
`;

export const ProductTags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .25rem;

    margin-top: calc(7.5rem - 20px);
    margin-bottom: 1rem;
`;

export const Tag = styled.span`    
    background: ${({ theme }) => theme['yellow-100']};
    border-radius: 100px;

    color:  ${({ theme }) => theme['yellow-900']};
    text-transform: uppercase;
    font-size: .625rem;
    font-weight: 900;

    padding: .25rem .5rem;

`;

export const ProductInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2rem;

    h2 {
        color:  ${({ theme }) => theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: bolder;

        margin-bottom: .5rem;
    }

    p {
        text-align: center;
        color:  ${({ theme }) => theme['base-label']};
        font-size: .875rem;
    }
`;

export const ProductButtons = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;   

    button {
        display: flex;
        align-items: center;
        border: none;

        cursor: pointer;
    }    

    .minusAndPlusBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .25rem;

        padding: .5rem;
        border-radius: 6px;

        
        background: ${({ theme }) => theme['base-button']};

        button {
            background: ${({ theme }) => theme['base-button']};
            color:  ${({ theme }) => theme['purple-500']};

            svg {
                stroke-width: 8px;

            }
        }
    }

    .shoppingCartBtn {
        background: ${({ theme }) => theme['purple-900']};
        padding: .5rem;
        border-radius: 6px;

        color:  ${({ theme }) => theme['base-card']};

        transition: opacity .3s ease-in-out;

        &:hover {
            opacity: .9;
        }
    }


`;

