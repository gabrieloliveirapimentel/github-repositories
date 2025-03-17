import { Container, Content, Heading } from "./styles"
import { GoSignOut } from "react-icons/go"
import logoImg from '../../assets/logo.svg'
import { useContext } from "react"
import { AuthContext } from "../../context/types"
import { HeaderProps } from "../../@types/types"

export function Header({ logout }: HeaderProps) {
    const { handleLogout } = useContext(AuthContext)

    return (
        <Container>
            {logout && (
                <Heading>
                <button onClick={handleLogout}>
                    <span>Sair</span>
                    <GoSignOut fontSize={16} />
                </button>
            </Heading>)}
            <Content>
                <img src={logoImg} alt="" />
            </Content>
        </Container>
    )
}