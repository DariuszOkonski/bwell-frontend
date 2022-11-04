import axios from "axios"
import { useHistory } from "react-router"
import { v4 } from "uuid"
import { ACCESS_TOKEN } from "../oauth2/constants"
import { Ax } from "./interceptors"
import UserService from "./UserService"
import { dietPlanUrls, endpoints, isLocalhost, moduleNameToApi, moduleNameToBackendTag } from "./utilities"
import _history from "./_history"

const localhost = isLocalhost
const PORT = localhost ? "8080" : ""
const BASE_URL = localhost ? `http://localhost:${PORT}/api/v1` : `https://bwell-backend.herokuapp.com/api/v1`

let currentUserId = UserService();

const TokenHeaders = (doRedirect=true) => {
    const headers = new Headers({
        'Accept': 'application/json',
        "Content-Type": "application/json"
      });
    
      if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append("Authorization", "Bearer " + localStorage.getItem(ACCESS_TOKEN));
      } else {
        if (doRedirect) {window.location.href = "/login"}
        return null;
    }
      return {headers: headers}
}

export const eatWell = {
    fetchRecipes: async () => {
        
        const response = await fetch(`${BASE_URL}${endpoints.APIeatWell}`)
        const data = await response.json()

        return data
    },
    fetchRecipe: async (id) => {
        const response = await fetch(`${BASE_URL}${endpoints.APIeatWell}${id}`)

        const data = await response.json()

        return data 
    },
    fetchRecipeNutritionSum: async (id) => {

        const response = await fetch(`${BASE_URL}${endpoints.APIeatWell}${id}/nutrition`,)

        const data = await response.json()
        return data 
    },
    fetchPostUserCalculatorData: async (calculatorData) => {
        const user = await UserService(true)
        calculatorData.user = user;
        
        const response = await fetch(`${endpoints.APIhost}${endpoints.eatwell_calculator}`, {...TokenHeaders(), 
            method: 'POST',
            body: JSON.stringify(calculatorData)
        });
        const data = await response.json();
        return data
    },
    fetchGetUserCalculatorData: async () => {
        const loggedId = await UserService()
    
        const response = await fetch(`${endpoints.APIhost}${endpoints.eatwell_calculator}/${loggedId}`, {...TokenHeaders()})

        const data = await response.json()

        return data 
    },

    fetchGetUserCoverageForIngredients: async(recipeId) => {
        const loggedId = await UserService()
        const response = await fetch(`${endpoints.APIhost}${endpoints.eatwell_calculator}/${loggedId}/recipe/${recipeId}`, {
            method: 'GET',
            headers: TokenHeaders().headers,
        });
        const data = await response.json();
        return data
    },


    fetchCoverageOfNutrients: async() => {
        const loggedId = await UserService()
        const response = await fetch(`${endpoints.APIhost}${endpoints.eatwell_calculator}/${loggedId}/dietplan/coverage`, {
            method: 'GET',
            headers: TokenHeaders().headers,
        });
        const data = await response.json();
        return data
    },

    setRecipeAsMeal: async(recipeId, meal) => {
        
        const loggedId = await UserService()
        const response = await fetch(dietPlanUrls.setRecipeForMeal(loggedId, recipeId, meal), {headers: TokenHeaders().headers})

        const data = await response.json()

        return data 
    },

    fetchDietPlan: async ()=> {
        const loggedId = await UserService()
        const response = await fetch(dietPlanUrls.dietPlanForUser(loggedId), {...TokenHeaders()})

        const data = await response.json()

        return data 
    },
    fetchSumRecipesNutrition: async () => {
        const loggedId = await UserService()
        const response = await fetch(`${endpoints.APIhost}${endpoints.eatwell_calculator}/${loggedId}/dietplan/sum`, {
            method: 'GET',
            headers: TokenHeaders().headers,
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
        const response = await fetch(`${BASE_URL}${endpoints.APIfitWell}${id}`)
        const data = await response.json()

        return data
    },

}

const postNewEntry = async (module, title, content, entry=null) => {
    const POST_URL = `${BASE_URL}${moduleNameToApi(module)}`

    const credentials = await UserService(true);
    let postedEntry = {
        module: moduleNameToBackendTag(module),
        title: title,
        description: content.length > 0 && content[0] && content[0].text && "No description",
        rating: { up: 0, down: 0 },
        content: content,
        author: credentials
    }
    if(entry != null) {
        postedEntry.id = entry.id;
        postedEntry.rating = entry.rating;
    }
    
    const settings = {
        ...TokenHeaders(),
        method: 'POST',
        body: JSON.stringify(postedEntry)
    };
    try {
        // const fetchResponse = await fetch(POST_URL, settings);
        const fetchResponse = Ax.post(POST_URL, settings.body)
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}
const updateEntry = async (entry) => {
    const PUT_URL = `${BASE_URL}${moduleNameToApi(entry.module)}${entry.id}`

}
const deleteEntry = async (module, id) => {
    const DELETE_URL = `${BASE_URL}${moduleNameToApi(module)}/${id}`
    
    const settings = {...TokenHeaders(),
        method: 'DELETE',  
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
            headers: TokenHeaders().headers,
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
        const loggedUser = await UserService();

        //GET JSON
        const userData = await favourites.fetchUserData(loggedUser);

        
        

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

        

        //SEND MODIFIED OBJECT
        const POST_URL = `${BASE_URL}${endpoints.APIusers}${loggedUser}`;
        const settings = {
            method: 'POST',
            headers: TokenHeaders().headers,
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
        const loggedUser = await UserService();

        //GET JSON
        const userData = await favourites.fetchUserData(loggedUser);

        
        

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

        

        //SEND MODIFIED OBJECT
        const POST_URL = `${BASE_URL}${endpoints.APIusers}${loggedUser}`;
        const settings = {
            method: 'PUT',
            headers: TokenHeaders().headers,
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

const ratings = {
    vote: async (entry, voteValue) => {
        const POST_URL = `${BASE_URL}${endpoints.APIrating}`;
        const user = await UserService(true);
        const settings = {
            // method: 'POST',
            // headers: TokenHeaders().headers,
            data: JSON.stringify({user: user, entry: entry, voteValue: voteValue})
        };
        console.log(settings)
        try {
            // const response = await fetch(POST_URL, settings)
            const response = await Ax.post(POST_URL, settings.data)
            // const response = Ax.post(POST_URL, settings).then()
            // console.log(response);
            // const data = await response.json()

            return response.data;
        } catch (error) {
            return error;
        }
    },
    getCurrentVote: async (entryId) => {
        const get_url = `${BASE_URL}${endpoints.APIrating}${entryId}`
        
        
        try {
            const response = await Ax.get(get_url);
            console.log(response)
            // const response = await fetch(get_url, {method: "GET", headers: TokenHeaders(false).headers});
            // const data = await response.json()
            // console.log(data);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}


const entry = {
    getEntryByIdIfAuthor: async (entryId, module) => {
        const get_url = `${BASE_URL}${moduleNameToApi(module)}${entryId}`
        try {
            const response = await fetch(get_url, {method: "GET", headers: TokenHeaders(false).headers})
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }    
    

}

const handleRedirectIfNotAuthorized = (err) => {
    
    if (err && [403, 401].includes(err.status)) {
        _history.push('/login');
    }
    return err; 
}

export { fitWell, postNewEntry, deleteEntry, favourites, currentUserId, ratings, entry, handleRedirectIfNotAuthorized }

