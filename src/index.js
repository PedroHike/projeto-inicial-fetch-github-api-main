import { getUser } from "./scripts/services/user.js";
import { getRepositories } from "./scripts/services/repositories.js";

import { user } from "./scripts/objects/user.js";
import { screen } from "./scripts/objects/screen.js";

document.getElementById('btn-search')
.addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value
    emptyInput(userName)
})

document.getElementById('input-search')
.addEventListener('keyup', (e)=> {
    const userName = e.target.value
    if(e.key==="Enter"){
        emptyInput(userName)
    }
});

function emptyInput (userName){
    userName ? getUserData(userName) : alert('Favor preencher o campo!!!')}

async function getUserData(userName){
    const userResponse = await getUser(userName)
    
    if (userResponse.message === "Not Found") {
        screen.rederNotFound()
        return
    }
    
    const repositoriesResponse = await getRepositories(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    
    screen.renderUser(user)
}

getUserData('pedrohike')