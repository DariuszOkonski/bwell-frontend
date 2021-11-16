import { useHistory } from "react-router"
import { v4 } from "uuid"
import { ACCESS_TOKEN } from "../oauth2/constants"
import UserService from "./UserService"
import { dietPlanUrls, endpoints, isLocalhost, moduleNameToApi, moduleNameToBackendTag } from "./utilities"

const localhost = isLocalhost
const PORT = localhost ? "8080" : ""
const BASE_URL = localhost ? `http://localhost:${PORT}/api/v1` : `https://bwell-backend.herokuapp.com/api/v1`

let currentUserId = UserService();

const TokenHeaders = () => {
    const headers = new Headers({
        'Accept': 'application/json',
        "Content-Type": "application/json"
      });
    
      if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append("Authorization", "Bearer " + localStorage.getItem(ACCESS_TOKEN));
      } else {
        window.location.href = "/login"
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

const postNewEntry = async (module, title, content) => {
    console.log("Backend Request ==============================")
    console.log(module, title, content)
    const POST_URL = `${BASE_URL}${moduleNameToApi(module)}`
    console.log(POST_URL)


    // TODO - remove uuid from objects before send to backend

    const postedEntry = {
        module: moduleNameToBackendTag(module),
        title: title,
        description: content && content[0].text ? content[0].text : "No description",
        rating: { up: 0, down: 0 },
        content: content
    }
    
    const settings = {
        ...TokenHeaders(),
        method: 'POST',
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
        console.log('api endpoint ===================')
        console.log(APIendpoint)
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



export { fitWell, postNewEntry, deleteEntry, favourites, currentUserId }

