import styled from "styled-components"
import { Toaster } from "react-hot-toast"

export const Container = styled.div`
    background-color: ${props => props.theme["gray-500"]};
    border-radius: 10px;

    width: 100%;
    padding: 24px;
    
    margin-bottom: 24px;
`

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 16px;

    a {
        line-height: 1.8rem;
        text-decoration: none;

        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.theme["gray-200"]};

        &:hover {
            color: ${props => props.theme["gray-300"]};
        }
    }
    
    span {
        margin-top: 6px;
        font-size: 0.875rem;
        color: ${props => props.theme["gray-300"]};
    }
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 16px;
    margin-top: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;
    }
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    span {
        color: ${props => props.theme['gray-200']};
    }
`

export const Link = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    gap: 8px;

    span {
        color: ${props => props.theme['gray-200']};
    }

    &:hover {
        span, svg {
            color: ${props => props.theme.blue};
            cursor: pointer;
        }
    }

    text-decoration: none;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Toast = styled(Toaster)`
    position: top-right;
    background-color: ${props => props.theme["gray-500"]};
    color: ${props => props.theme["gray-200"]};
    
    border-radius: 10px;
    padding: 8px;
`




