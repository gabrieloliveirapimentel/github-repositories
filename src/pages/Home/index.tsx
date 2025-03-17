import { useContext, useState } from "react"
import { Profile } from "../../components/Profile"
import { ProfileContext } from "../../context/types"
import { Container, Content } from "./styles"
import { IRepository } from "../../@types/types"
import { List } from "../../components/List"

export function Home() {
    const { profile, repositories, fetchRepositoriesByUser } = useContext(ProfileContext)
    const [ filteredRepositories ] = useState<IRepository[]>(repositories)

    console.log(filteredRepositories.length)

    return (
        <div>
            <Profile profile={profile} />
            <Container>
                <Content>
                    <h2>Repositórios</h2>
                    <span>{repositories.length} repositórios</span>
                </Content>
                <List repositories={repositories} updateRepositories={fetchRepositoriesByUser} />
            </Container>
        </div>
    )
}