let user = {
    avatarUrl: '',
    name: '',
    userName: '',
    bio: '',
    repositories: [],
    followers:'',
    following:'',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(gitHubRepositories){
        this.repositories = gitHubRepositories
    }
}

export{user}