import { Container } from "./styles"

export function Search({search, updateSearch}: {search: string, updateSearch: (value: string) => void}) {
    
    return (
        <Container>
            <input 
                onSubmit={(e) => e.preventDefault()}
                type="text" 
                placeholder="Buscar repositórios" 
                onChange={(e) => updateSearch(e.target.value)}
                value={search}
            />
        </Container>
    )
}