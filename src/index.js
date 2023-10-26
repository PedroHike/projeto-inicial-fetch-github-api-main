import { user } from "./scripts/services/user.js";

import { repositories } from "./scripts/services/repositories.js";

document.getElementById('btn-search')
.addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value
    if(userName){
        getUserProfile(userName)
    }
})

//adicionando escuta de: quando clicar no enter, enviar informação
document.getElementById('input-search')
.addEventListener('keyup', (e)=> {
    const userName = e.target.value
    if(e.key==="Enter"){
        if(userName){
            getUserProfile(userName)
        }
    }
});

function getUserProfile(userName){
    
    user(userName).then((dadosUsuario)=>{
        
        
        document.querySelector('.profile-data').innerHTML =  
        `<div class="perfil">   
            <img src="${dadosUsuario.avatar_url}" alt="">
            <div class="info">
                <h1 class="nome-usuario">${dadosUsuario.name ?? 'Não possui nome cadastrado 😥'}</h1>
                <p class="bio">${dadosUsuario.bio ?? 'Não possui bio cadastrada 😥'}</p>
            </div>
        </div>`
        
    })
    getUserRepositorie(userName)
    
}
function getUserRepositorie(userName){
    repositories(userName).then((reposData) => {
        let repositoriesItens = ""
        reposData.forEach(repos => {
            repositoriesItens += 
            `<li><a href="${repos.html_url}" target="_blank">${repos.name}</a><li>
                `
        });

        

        document.querySelector('.profile-data').innerHTML += 
        `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>
                ${repositoriesItens}
            </ul>
        </div>
        `;
    })

}


