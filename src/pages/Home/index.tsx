import { useContext } from "react"
import { Card } from "../../components/Card"
import { Profile } from "../../components/Profile"
import { Search } from "../../components/Search"
import { ProfileContext } from "../../context/types"
import { Container, Content, List } from "./styles"
import { IRepository } from "../../@types/types"

export function Home() {
    const { profile, repositories } = useContext(ProfileContext)

    return (
        <div>
            <Profile profile={profile} />
            <Container>
                <Content>
                    <h2>Repositórios</h2>
                    <span>{repositories.length} repositórios</span>
                </Content>
                <Search />
                <List>
                    {repositories.length > 0 ? repositories.map(( repository: IRepository )  => (
                        <Card key={repository.id} repository={repository} />
                    )) : (
                        <span>Nenhum repositório encontrado</span>
                    )}
                </List>
            </Container>
        </div>
    )
}