import styled from "styled-components"
import coverImg from '../../assets/cover.png'

export const Container = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
    background-image: url(${coverImg});
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        padding: 2rem 0 6rem;
    }

    @media (max-width: 480px) {
        padding: 1.5rem 0 5rem;
    }

    button {
        align-self: flex-end;
        justify-content: flex-end;
    }
`

export const Heading = styled.div`
    display: flex;
    justify-content: flex-end;

    padding: 0 2rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 8px;
        color: ${props => props.theme.blue};

        background: transparent;
        border: none;

        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;

        span {
            margin-top: 1px;
            margin-left: 8px;
        }

        &:hover {
            color: ${props => props.theme['dark-blue']};
            border-bottom: 2px solid;
        }

        
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {

        padding: 0 1rem;
    }

    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
`
