import styled from "styled-components";

export const InputContainer = styled.input`
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
