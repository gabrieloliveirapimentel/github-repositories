
import { useTheme } from "styled-components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GoPerson, GoPeople, GoOrganization  } from "react-icons/go";
import { 
    Container, 
    Content, 
    Name, 
    Description, 
    Links, 
    Link, 
    Item 
} from "./styles";
import { IHeaderProfile } from "../../@types/types";

export function Profile({ profile }: IHeaderProfile) {
    const theme = useTheme();
    const followersNumber = profile.followers ? profile.followers + ' Seguidores' : '0 Seguidores'
    
    return (
        <Container>
            <img src={profile.avatar_url} alt="Profile" />
            <Content>
                <Item>
                    <Name>
                        <h2>{profile.name}</h2>
                        <a href={profile.html_url ? profile.html_url : ''} target="_blank">
                            <span>Github</span>
                            <FaArrowUpRightFromSquare fontSize={12} />
                        </a>
                    </Name>
                    <Description>{profile.bio}</Description>
                </Item>
                <Item>
                    <Links>
                        <Link>
                            <GoPerson fontSize={16} color={theme['gray-300']} />
                            <span>{profile.login}</span>
                        </Link>
                        <Link>
                            <GoOrganization fontSize={16} color={theme['gray-300']} />
                            <span>Rocketseat</span>
                        </Link>
                        <Link>
                            <GoPeople fontSize={16} color={theme['gray-300']} />
                            <span>{followersNumber}</span>
                        </Link>
                    </Links>
                </Item>
            </Content>
        </Container>
    )
}