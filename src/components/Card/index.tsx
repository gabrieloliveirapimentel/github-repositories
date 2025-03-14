import { formatDistanceToNow } from "date-fns";
import { Container, Content, Items, Item, Link, Heading } from "./styles";
import { ptBR } from "date-fns/locale";
import { useTheme } from "styled-components";
import { ICardProps } from "../../@types/types";
import { GoKey, GoGitBranch, GoRepoForked, GoEye, GoCode } from "react-icons/go";

export function Card({repository} : ICardProps) {
    const theme = useTheme();
        
    return (
        <Container>
            <Heading>
                <a href={repository.html_url} target="_blank">{repository.full_name}</a>
                <span>
                    {formatDistanceToNow(
                        new Date(repository.created_at), {
                        addSuffix: true,
                        locale: ptBR
                    })}
                </span>
            </Heading>
            <Content>
                <Items>
                    <Item>
                        <GoGitBranch fontSize={16} color={theme['gray-300']} />
                        <span>{repository.default_branch}</span>
                    </Item>
                    <Item>
                        <GoRepoForked fontSize={16} color={theme['gray-300']} />
                        <span>{repository.forks} forks</span>
                    </Item>
                    <Item>
                        <GoEye fontSize={16} color={theme['gray-300']} />
                        <span>{repository.watchers} watchers</span>
                    </Item>
                </Items>
                <Items>
                    <Link href='/'>
                        <GoKey fontSize={16} color={theme['gray-300']} />
                        <span>SSH</span>
                    </Link>
                    <Link href='/'>
                        <GoCode fontSize={16} color={theme['gray-300']} />
                        <span>HTTPS</span>
                    </Link>
                </Items>
            </Content>
        </Container>
    )
}