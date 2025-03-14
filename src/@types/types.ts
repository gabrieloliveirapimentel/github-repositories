export interface IHeaderProfile {
    profile: {
        name: string
        bio?: string
        login: string
        avatar_url: string
        html_url: string
        followers?: number
    }
}

export interface ICardProps {
    repository: {
        full_name: string;
        created_at: string;
        html_url: string;
        owner: IProfile;
        ssh_url: string;
        clone_url: string;
        forks: number;
        watchers: number;
        default_branch: string;
    }
}

export interface IProfile {
    login: string;
    id?: number;
    node_id?: string;
    avatar_url: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    name: string;
    company?: string;
    location?: string;
    bio?: string;
    followers?: number;
    following?: number;
}

export interface IRepository {
    id: number;
    name: string;
    full_name: string;
    owner: IProfile;
    html_url: string;
    description?: string;
    created_at: string;
    updated_at: string;
    ssh_url: string;
    clone_url: string;
    forks: number;
    watchers: number;
    default_branch: string;
}

export interface IProfileContextType {
    profile: IProfile;
    repositories: IRepository[];
    fetchRepositoriesByUser: () => Promise<void>;
}


