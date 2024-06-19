import styled from 'styled-components';

export const ProductCheckoutContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
   
    padding-bottom: 1.5rem;   
    
    border-bottom: 2px solid ${({ theme }) => theme["base-button"]};

    img {
        width: 4rem;
        height: 4rem;

        margin-right: 1.25rem;
    }

    h3 {
        color: ${({ theme }) => theme['base-subtitle']};
        font-size: 1rem;
        font-weight: 500;
    }

    .ProductCheckoutButtonsWrapper {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .price {
        margin-left: 3.125rem;
        color: ${({ theme }) => theme['base-text']};
        font-weight: bold;

    }

`;

export const ProductCheckoutButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .5rem; 
    
    button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
    }

    .minusAndPlusBtn,
    .removeBtn {
        display: flex;
        align-items: center;
        gap: .25rem;

        background: ${({ theme }) => theme['base-button']};
        padding: .375rem .5rem;
        border-radius: 6px;


        span {
            text-transform: uppercase;
        }

        .amount {
            font-size: 1rem;
            color: ${({ theme }) => theme['base-title']};
            font-weight: 500;
        }

        .remove {
            color: ${({ theme }) => theme['base-text']};
            font-size: .875rem;
        }
        
        svg {
            color: ${({ theme }) => theme['purple-500']};
        }
    }

`;