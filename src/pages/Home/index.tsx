import { useContext } from "react"
import { Profile } from "../../components/Profile"
import { ProfileContext } from "../../context/types"
import { Container, Content } from "./styles"
import { List } from "../../components/List"

export function Home() {
    const { profile, repositories, fetchRepositoriesByUser } = useContext(ProfileContext)

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