import { useContext } from "react"
import { ProfileContext } from "../../context/types"

import { 
    Container, 
    Content 
} from "./styles"

import { List } from "../../components/List"
import { Header } from "../../components/Header"
import { Profile } from "../../components/Profile"

export function Home() {
    const { profile, repositories, fetchRepositoriesByUser } = useContext(ProfileContext)

    return (
        <div>
            <Header logout={true}/>
            <Profile profile={profile} />
            <Container>
                <Content>
                    <h2>Repositórios</h2>
                    <span>{repositories?.length} repositórios</span>
                </Content>
                <List repositories={repositories} updateRepositories={fetchRepositoriesByUser} />
            </Container>
        </div>

    )
}