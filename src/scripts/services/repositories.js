import { baseUrl, repositoryQuantity } from "../variables.js";

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos`);
    const jsonResponse = await response.json();
    
    let reposLinguage = jsonResponse.filter((item)=>{
        return item.language != null
    }).slice(0, repositoryQuantity).map((infos=>{
        return {
            name:`${infos.name}`,
            url:`${infos.html_url}`,
            forks:`${infos.forks}`,
            stars:`${infos.stargazers_count}`,
            watchers:`${infos.watchers}`,
            language:`${infos.language}`,
        }
    }))
    return reposLinguage;
}

export {getRepositories}