
const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){

        this.userProfile.innerHTML = 
        `<div class="perfil">   
            <img src="${user.avatarUrl}" alt="">
            <div class="info">
                <h1 class="nome-usuario">${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                <p class="user-name">( ${user.userName} )</p>
                <div class="follow">
                    <div class="followers">
                        <h3 class="">Seguidores</h3>
                        <p>${user.followers}</p>
                    </div>
                    <div class="following">
                        <h3 class="">Seguindo</h3>
                        <p>${user.following}</p>
                    </div>
                </div>
                <p class="bio">${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
            </div>
        </div>`

        let repositoriesItens = "";
    
        user.repositories.forEach(repos => {
        
            repositoriesItens += 
            `<li>
                <a href="${repos.url}" target="_blank">${repos.name}</a>
                <div class="interacao">
                    <div>🍴 ${repos.forks}</div>
                    <div>⭐ ${repos.stars}</div>
                    <div>👀 ${repos.watchers}</div>
                    <div>👩‍💻 ${repos.language}</div>
                </div>
                
            </li>`
        });

        if(repositoriesItens.length > 0){
            this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>
                    ${repositoriesItens}
                </ul>
            </div>`;
        }

        let eventList = ''

        user.events.forEach((commit)=>{
            eventList +=
            `<li>
                <p><strong>${commit.name}</strong> - ${commit.commit}</p>
            </li>`
        })

        if(eventList.length > 0){
            this.userProfile.innerHTML += 
            `<div class="events section">
                <h2>Eventos</h2>
                <ul>
                    ${eventList}
                </ul>
            </div>`;
        }
    },

    rederNotFound(){
        this.userProfile.innerHTML =
        `<h3>Usuário não encontrado 😥</h3>
        <p>Tente novamente</p>`
    }
}

export { screen }