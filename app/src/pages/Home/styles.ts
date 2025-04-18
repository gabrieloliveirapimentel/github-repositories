import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 864px;
    margin: 4rem auto 0;

    @media (max-width: 864px) {
        margin: 4rem auto 0;
    }

    @media (max-width: 880px) {
        max-width: 90%;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 12px;

    h2 {
        font-size: 1.2rem;
        color: ${props => props.theme['gray-200']};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['gray-300']};
    }

    @media (max-width: 864px) {
        margin: 4rem 2rem 1rem;
    }
`