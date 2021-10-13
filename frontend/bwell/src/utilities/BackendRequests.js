import { v4 } from "uuid"
import { endpoints, moduleNameToApi } from "./utilities"

const json_server = true
const PORT = json_server ? "3001" : "8080"
const BASE_URL = `http://localhost:${PORT}/`

const eatWell = {
    fetchRecipes: async () => {
        
        const response = await fetch(`${BASE_URL}${endpoints.APIeatWell}`)
        const data = await response.json()

        return data 
    },
    fetchRecipe: async (id) => {
        const response = await fetch(`${BASE_URL}${endpoints.APIeatWell}/${id}`)
        const data = await response.json()

        return data 
    }
}

const fitWell = {
    fetchActivities: async () => {
        const response = await fetch(`${BASE_URL}${endpoints.APIfitWell}`)
        const data = await response.json()

        return data 
    },
    fetchActivity:  async (id) => {
        const response = await fetch(`${BASE_URL}${endpoints.APIfitWell}/${id}`)
        const data = await response.json()

        return data 
    },

}

const postNewEntry = async (module, title, content) => {
    console.log(module, title, content)
    const POST_URL = `${BASE_URL}${moduleNameToApi(module)}`
    
    const postedEntry = {
        id: v4(),
        title: title,
        description: content && content[0].text ? content[0].text : "No description",
        rating: { up: 0, down: 0},
        content: content
    }
    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postedEntry)
    };
    try {
        const fetchResponse = await fetch(POST_URL, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }    
}

const deleteEntry = async (module, id) => {
    const DELETE_URL = `${BASE_URL}${moduleNameToApi(module)}/${id}`
    console.log(DELETE_URL)
    const settings = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(DELETE_URL, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }    
}



export {eatWell, fitWell, postNewEntry, deleteEntry}

