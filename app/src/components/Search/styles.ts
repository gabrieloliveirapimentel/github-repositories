import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        padding: 1rem;

        height: 44px;
        
        border-radius: 6px;
        border: 1px solid;
        border-color: ${props => props.theme['gray-600']};

        background: ${props => props.theme['gray-500']};
        color: ${props => props.theme['gray-100']};

        &::placeholder {
            color: ${props => props.theme['gray-300']};
        }
    }

    @media (max-width: 864px) {
        margin: 0 2rem 0;
    }
`