import styled from "styled-components"

export const CheckoutContainer = styled.div`

    button {
        cursor: pointer;
    }

    header {
        margin-bottom: 2.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        gap: 2rem;

        @media (min-width: 1024px) {
            flex-direction: row;
            align-items: start;
        }
    }

                
    .errorMsg {
        color: red;
        font-size: .75rem;
        margin-top: .2rem;
        font-style: italic;
    }
`;

export const ClientInfos = styled.div`
    > h2 {
        margin-bottom: 1rem;
    }

    > div + div {
        margin-top: .75rem;
    }

`;


export const ClientAddress = styled.div`
    background: ${({ theme }) => theme["base-card"]};
    border-radius: 6px;

    padding: 2.5rem;

    .addressContainerLabel {
        display: flex;
        align-items: start;
        gap: .5rem;

        margin-bottom: 2rem;

        svg {
            color: ${({ theme }) => theme["yellow-900"]};
        }
    }

    .inputsContainer {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;

        .inputWithErrorWrapper {
            width: 100%;    
        }

        & > div:first-of-type > input {
            width: 40%;       
        }

        & .inputsWrapper:nth-child(3) .inputWithErrorWrapper:first-of-type {
            width: 70%;
        }

        & .inputsWrapper:nth-child(4) .inputWithErrorWrapper:nth-child(1) {
            width: 87%;
        }

        & .inputsWrapper:nth-child(4) .inputWithErrorWrapper:last-of-type {
            width: 20%;
        }

        & > div:last-of-type > input:last-of-type {
           
        }

        .inputsWrapper {
            position: relative;
            width: 100%;

            display: flex;
            align-items: flex-start;
            justify-content: start;
            gap: .75rem;

            input:not(:placeholder-shown) + .formOptionalInput {
                display: none;
            }

            .formOptionalInput {
                position: absolute;
                right: 8px;
                top: 22%;
                font-style: italic; 
                font-size: .75rem;
            }
        }
    }
`;


export const ClientPaymentMethod = styled.div`
    background: ${({ theme }) => theme["base-card"]};
    border-radius: 6px;

    padding: 2.5rem;


    .paymentContainerLabel {
        display: flex;
        align-items: start;
        gap: .5rem;

        margin-bottom: 2rem;

        svg {
            color: ${({ theme }) => theme["yellow-900"]};
        }
    }

    .buttonsContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .75rem;

        input[type="radio"] {
            display: none;
        }

        input[type="radio"]:checked + label {            
            background: ${({ theme }) => theme["purple-100"]};
            border-color: ${({ theme }) => theme["purple-500"]};
        }

    }
`;


export const CheckoutSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background: ${({ theme }) => theme["base-card"]};
    border-radius: 6px 44px 6px 44px;

    padding: 2.5rem;

    margin-top: 1rem;

    .confirmOrder {
        padding: .75rem;
        
        border: none;
        border-radius: 6px;
        background: ${({ theme }) => theme["yellow-500"]};

        color: ${({ theme }) => theme.white};
        text-transform: uppercase;
        font-size: .875rem;
        font-weight: bolder;   

        &:disabled {
            cursor: not-allowed;
            opacity: .7;
        }
    }
`;

export const ProductsCheckout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

`;

export const OrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    .titleAndPriceWrapper {

        display: flex; 
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 1.25rem;
        }

        .titleSummary {
            font-size: .875rem;            
        }

        .priceSummary {
            font-weight: 400;           
        }
    }
`;


export const InputRadioLabel = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .75rem;

    background: ${({ theme }) => theme["base-button"]};
    border: 2px solid transparent;
    border-radius: 6px;

    padding: 1rem;

    text-transform: uppercase;
    font-size: .75rem;
    font-weight: 400;

    cursor: pointer;

    @media (max-width: 768px) {
        font-size: .6rem;
    }


    svg {
        color: ${({ theme }) => theme["purple-500"]};
    }
`;


export const Input = styled.input`
    width: 100%;

    background: ${({ theme }) => theme["base-button"]};
    border: none;
    border-radius: 4px;

    padding: .75rem;

    color: ${({ theme }) => theme["base-label"]};
    font-size: .875rem;

    &::placeholder {
        color: ${({ theme }) => theme["base-label"]};
        font-size: .875rem;
    }

`;

