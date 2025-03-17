import { formatDistanceToNow } from "date-fns";
import { Container, Content, Items, Item, Link, Heading } from "./styles";
import { ptBR } from "date-fns/locale";
import { useTheme } from "styled-components";
import { ICardProps } from "../../@types/types";
import { GoKey, GoGitBranch, GoRepoForked, GoEye, GoCode, GoDotFill } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import { useLanguagesDictionary } from "../../hooks/useLanguagesDictionary";

export function Card({repository} : ICardProps) {
    const theme = useTheme();
    const languagesDictionary = useLanguagesDictionary();

    function copySSHToClipboard() {
        navigator.clipboard.writeText(repository.ssh_url);
        toast.success('SSH copiado para a área de transferência', {
            style: {
                backgroundColor: theme['gray-500'],
                color: theme['gray-200'],
                boxShadow: 'none'
            }
        });
    }

    function copyHTTPToClipboard() {
        navigator.clipboard.writeText(repository.clone_url);
        toast.success('HTTPS copiado para a área de transferência', {
            style: {
                backgroundColor: theme['gray-500'],
                color: theme['gray-200'],
                boxShadow: 'none'
            }
        });
    }
        
    return (
        <Container>
            <Heading>
                <a href={repository.html_url} target="_blank">{repository.full_name}</a>
                <span>
                    Atualizado {formatDistanceToNow(
                        new Date(repository.updated_at), {
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
                    {repository.language && 
                    languagesDictionary.find(language => language.name === repository.language) && (
                        <Item>
                            <GoDotFill fontSize={16} color={languagesDictionary.find(language => language.name === repository.language)?.color} />
                            <span>{repository.language}</span>
                        </Item>
                    )}
                </Items>
                <Items>
                    <Link onClick={copySSHToClipboard}>
                        <GoKey fontSize={16} color={theme['gray-300']} />
                        <span>SSH</span>
                    </Link>
                    <Link onClick={copyHTTPToClipboard}>
                        <GoCode fontSize={16} color={theme['gray-300']} />
                        <span>HTTPS</span>
                    </Link>
                </Items>
                <Toaster position="top-right"/>
            </Content>
        </Container>
    )
}