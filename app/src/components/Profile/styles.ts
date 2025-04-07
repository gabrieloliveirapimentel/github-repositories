import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 2rem;

    padding: 40px 32px;
    margin-top: -5rem;

    max-width: 864px;
    height: 212px;

    border-radius: 10px;
    background-color: ${props => props.theme['gray-500']};

    img {
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }

    @media (max-width: 880px) {
        max-width: 82%;
    }
`

export const Content = styled.div`
    display: flex;
    width: 100%;

    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`

export const Description = styled.div`
    color: ${props => props.theme['gray-200']};
`
export const Item = styled.div``

export const Name = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme['gray-200']};
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 8px;
        color: ${props => props.theme.blue};

        background: transparent;
        border: none;

        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;

        &:hover {
            color: ${props => props.theme['dark-blue']};
            border-bottom: 2px solid;
        }

        span {
            margin-top: 1px;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;
    }
`

export const Link = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    span {
        color: ${props => props.theme['gray-200']};
    }
`