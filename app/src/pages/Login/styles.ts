import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 50vh;
    gap: 32px;
    
    button {
        display: flex;
        align-items: center;

        background-color: ${props => props.theme.blue};
        color: ${props => props.theme.white};

        padding: 8px 16px;
        border-radius: 8px;
        border: none;

        gap: 8px;

        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;

        &:hover {
            background-color: ${props => props.theme['dark-blue']};
            cursor: pointer;
        }
    }
`