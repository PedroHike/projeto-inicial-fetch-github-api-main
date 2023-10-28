let user = {
    avatarUrl: '',
    name: '',
    userName: '',
    bio: '',
    followers:'',
    following:'',
    repositories: [],
    events:[],

    setInfo(response){
        this.avatarUrl = response.avatar_url
        this.name = response.name
        this.userName = response.login
        this.followers = response.followers
        this.following = response.following
        this.bio = response.bio
    },
    setRepositories(response){
        this.repositories = response
    },
    setEvents(response){
        this.events = response
    }
}

export{user}