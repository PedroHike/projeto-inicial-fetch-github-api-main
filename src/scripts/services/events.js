import { baseUrl, repositoryQuantity } from "../variables.js";

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?`);
    const jsonArray = await response.json();

    let committedEvents = jsonArray.filter((committed)=>{
        return committed.payload.commits
    }).slice(0, repositoryQuantity).map((commit)=>{

        return {
            name:`${commit.repo.name}`,
            commit:`${commit.payload.commits[0].message}`,
            pushEvent: `${commit}`
        }
    });
    return committedEvents
}

export {getEvents}