import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;   

    .logoBtn {
        background: none;
        border: none;
        cursor: pointer;

        display: flex;
        align-items: center;
    }

    .headerButtonsWrapper {
        display: flex;
        align-items: center;
        gap: .75rem;

        button {
            border: none;
            border-radius: 6px;
            padding: .625rem .5rem;
            cursor: pointer;
        }
    }

    .address {
        display: flex;      
        align-items: center;
        gap: .25rem;    
        
        background: ${({ theme }) => theme["purple-100"]};
        color: ${({ theme }) => theme["purple-900"]};

        font-size: .875rem;

        transition: background .4s ease-in-out, color .4s ease-in-out;

        &:hover {
            background: ${({ theme }) => theme["purple-900"]};
            color: ${({ theme }) => theme["purple-100"]};
        }
        
        &:hover > svg {
            color: ${({ theme }) => theme["purple-100"]};
        }
        
        svg {
            color: ${({ theme }) => theme["purple-900"]};
            transition: color .4s ease-in-out;
        }
    }

    .shoppingCart {
        position: relative;
        display: flex;
        align-items: center;
        background: ${({ theme }) => theme["yellow-100"]};
        transition: background .4s ease-in-out;

        &:hover {
            background: ${({ theme }) => theme["yellow-900"]};
        }

        &:hover > svg {
            color: ${({ theme }) => theme["yellow-100"]};
        }
        
        svg {
            color: ${({ theme }) => theme["yellow-900"]};
            transition: color .4s ease-in-out;
        }

        .orderAmount {
            position: absolute;
            top: -10px;
            right: -10px;

            background: ${({ theme }) => theme["yellow-900"]};
            border-radius: 9999px;

            color: ${({ theme }) => theme.white};
            font-size: .75rem;
            
            padding: 2px 6px;
        }
    }

`