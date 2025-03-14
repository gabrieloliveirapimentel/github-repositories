import { Container } from "./styles"

export function Search() {
    return (
        <Container>
            <input 
                type="text" 
                placeholder="Buscar repositórios" 
            />
        </Container>
    )
}