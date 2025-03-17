import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Search } from "../../components/Search"
import { Content, Container, Button } from "./styles"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import { IRepository, ListProps } from "../../@types/types"

export function List({ repositories, updateRepositories }: ListProps) {
    const [ filteredRepositories, setFilteredRepositories ] = useState<IRepository[]>(repositories)
    const [ search, setSearch ] = useState<string>('')
    const [ page, setPage ] = useState<number>(1)

    const [ disabledNextPage, setDisabledNextPage ] = useState<boolean>(false)
    const [ disabledPreviousPage, setDisabledPreviousPage ] = useState<boolean>(false)

    useEffect(() => {
        updateRepositories(page)
    }, [page, updateRepositories])

    useEffect(() => {
        if (repositories) setFilteredRepositories(repositories.filter(repository => repository.name.toLowerCase().includes(search.toLowerCase()))) 
        else setFilteredRepositories([])
    }
    , [search, repositories])

    useEffect(() => {
        setDisabledNextPage(filteredRepositories.length > 0 && filteredRepositories.length < 10);
        setDisabledPreviousPage(page === 1);
    }, [filteredRepositories, page]);

    const handleNextPage = () => setPage(prevPage => prevPage + 1);

    const handlePreviousPage = () => setPage(prevPage => prevPage - 1);

    return (
        <div>
            <Search search={search} updateSearch={setSearch} />
            <Content>
                {filteredRepositories.length > 0 ? filteredRepositories.map(( repository: IRepository )  => (
                    <Card key={repository.id} repository={repository} />
                )) : (
                    <span>Nenhum repositório encontrado</span>
                )}
            </Content>
            <Container>
                <Button onClick={handlePreviousPage} disabled={disabledPreviousPage}>
                    <GoChevronLeft fontSize={16} />
                    Voltar</Button>
                <Button onClick={handleNextPage} disabled={disabledNextPage}>
                    Próximo
                    <GoChevronRight fontSize={16} />
                </Button>
            </Container>
        </div>
    )
}