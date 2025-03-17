import styled from "styled-components";

export const Content = styled.div`
    max-width: 864px;
    margin: 32px 0;

    display: flex;
    flex-direction: column;

    @media (max-width: 864px) {
        align-items: center;
        margin: 4rem 2rem 0;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 864px) {
        align-items: center;
        margin: 0 24px 0 24px;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;

    margin-bottom: 32px;
    padding: 6px;

    gap: 8px;

    background-color: transparent;
    border: none;
    
    font-size: 0.9rem;
    font-weight: 700;

    text-transform: uppercase;
    color: ${props => props.theme.blue};

    &:hover {
        color: ${props => props.theme['dark-blue']};
        border-bottom: 2px solid;

        cursor: pointer;   
    }

    &:disabled {
        opacity: 0.5;
        
        &:hover {
            color: ${props => props.theme.blue};
            border-bottom: none;
            cursor: default;
        }
    }
`

export const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
`