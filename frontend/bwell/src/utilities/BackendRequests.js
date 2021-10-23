import { v4 } from "uuid"
import UserService from "./UserService"
import { endpoints, moduleNameToApi } from "./utilities"

const json_server = true
const PORT = json_server ? "3001" : "8080"
const BASE_URL = `http://localhost:${PORT}/api/v1`

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
    },
    fetchPostUserCalculatorData: async (calculatorData) => {
        const response = await fetch(`http://localhost:8080/api/v1${endpoints.eatwell_calculator}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(calculatorData)
        });
        const data = await response.json();

        return data
    }

}

const fitWell = {
    fetchActivities: async () => {
        const response = await fetch(`${BASE_URL}${endpoints.APIfitWell}`)
        const data = await response.json()

        return data
    },
    fetchActivity: async (id) => {
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
        rating: { up: 0, down: 0 },
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

const favourites = {
    fetchUserData: async (loggedUser) => {
        const APIendpoint = `${BASE_URL}${endpoints.APIusers}${loggedUser}`;
        const response = await fetch(APIendpoint)
        const data = await response.json()

        return data;
    },
    modifyUserData: async (loggedUser, postedEntry) => {
        const POST_URL = `${BASE_URL}${endpoints.APIusers}${loggedUser}`;
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postedEntry)
        };
        try {
            const response = await fetch(POST_URL, settings)
            const data = await response.json()

            return data;
        } catch (error) {
            return error;
        }
    },
    addToFavouritesById: async (id, type) => {
        const loggedUser = UserService();

        //GET JSON
        const userData = await favourites.fetchUserData(loggedUser);

        console.log('Actual data: ' + userData)
        console.log(userData)

        //ADD WITHOUT DUPLICATES
        switch (type) {
            case 'eatwell':
                userData.favourites.recipes.push(id);
                userData.favourites.recipes = [...new Set(userData.favourites.recipes)];
                break;
            case 'fitwell':
                userData.favourites.exercises.push(id)
                userData.favourites.exercises = [...new Set(userData.favourites.exercises)];
                break;
            case 'thinkwell':
                userData.favourites.ideas.push(id)
                userData.favourites.ideas = [...new Set(userData.favourites.ideas)];
                break;
            case 'restwell':
                userData.favourites.activities.push(id)
                userData.favourites.activities = [...new Set(userData.favourites.activities)];
                break;
            default:
        }

        console.log('Modified data: ' + userData)

        //SEND MODIFIED OBJECT
        const POST_URL = `${BASE_URL}${endpoints.APIusers}${loggedUser}`;
        const settings = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        };
        try {
            const response = await fetch(POST_URL, settings)
            const data = await response.json()

            return data;
        } catch (error) {
            return error;
        }
    },
    removeFromFavouritesById: async (id, type) => {
        const loggedUser = UserService();

        //GET JSON
        const userData = await favourites.fetchUserData(loggedUser);

        console.log('Actual data: ' + userData)
        console.log(userData)

        //REMOVE FROM SET
        switch (type) {
            case 'eatwell':
                userData.favourites.recipes = userData.favourites.recipes.filter(entry => entry !== id);
                break;
            case 'fitwell':
                userData.favourites.exercises = userData.favourites.exercises.filter(entry => entry !== id);
                break;
            case 'thinkwell':
                userData.favourites.ideas = userData.favourites.ideas.filter(entry => entry !== id);
                break;
            case 'restwell':
                userData.favourites.activities = userData.favourites.activities.filter(entry => entry !== id);
                break;
            default:
        }

        console.log('Modified data: ' + userData)

        //SEND MODIFIED OBJECT
        const POST_URL = `${BASE_URL}${endpoints.APIusers}${loggedUser}`;
        const settings = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        };
        try {
            const response = await fetch(POST_URL, settings)
            const data = await response.json()

            return data;
        } catch (error) {
            return error;
        }
    },
}



export { eatWell, fitWell, postNewEntry, deleteEntry, favourites }

