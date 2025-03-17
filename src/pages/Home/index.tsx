import { useContext, useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Profile } from "../../components/Profile"
import { Search } from "../../components/Search"
import { ProfileContext } from "../../context/types"
import { Container, Content, List } from "./styles"
import { IRepository } from "../../@types/types"

export function Home() {
    const { profile, repositories } = useContext(ProfileContext)
    const [ filteredRepositories, setFilteredRepositories ] = useState<IRepository[]>(repositories)
    const [ search, setSearch ] = useState<string>('')

    useEffect(() => {
        setFilteredRepositories(repositories.filter(repository => repository.name.toLowerCase().includes(search.toLowerCase())))
    }
    , [search, repositories])

    return (
        <div>
            <Profile profile={profile} />
            <Container>
                <Content>
                    <h2>Repositórios</h2>
                    <span>{repositories.length} repositórios</span>
                </Content>
                <Search search={search} updateSearch={setSearch} />
                <List>
                    {filteredRepositories.length > 0 ? filteredRepositories.map(( repository: IRepository )  => (
                        <Card key={repository.id} repository={repository} />
                    )) : (
                        <span>Nenhum repositório encontrado</span>
                    )}
                </List>
            </Container>
        </div>
    )
}