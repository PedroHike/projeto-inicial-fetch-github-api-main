const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){

        this.userProfile.innerHTML = 
        `<div class="perfil">   
            <img src="${user.avatarUrl}" alt="">
            <div class="info">
                <h1 class="nome-usuario">${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                <p class="bio">${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
            </div>
        </div>`

        let repositoriesItens = "";
    
        user.repositories.forEach(repos => {
    
            repositoriesItens += 
            `<li>
                <a href="${repos.html_url}" target="_blank">${repos.name}</a>
            <li>`
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
    },

    rederNotFound(){
        this.userProfile.innerHTML =
        `<h3>Usuário não encontrado 😥</h3>
        <p>Tente novamente</p>`
    }
}

export { screen }