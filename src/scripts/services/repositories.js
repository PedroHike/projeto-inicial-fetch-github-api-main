import { baseUrl, repositoryQuantity } from "../variables.js";

async function repositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per-page=${repositoryQuantity}`);
    return await response.json();
}

export {repositories}