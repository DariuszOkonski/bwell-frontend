import RestaurantIcon from '@material-ui/icons/Restaurant';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import TextAreaInput from '../components/entrycreator/inputareas/TextAreaInput';
import IngredientsList from '../components/entrycreator/inputareas/IngredientsList';

const isLocalhost = false;
const APIhost = isLocalhost ? "http://localhost:8080/api/v1" : "https://bwell-backend.herokuapp.com/api/v1"


const colors = {
    white: '#FFF',
    buttonPrimary: '#FF934F',
    buttonPrimaryHover: '#FC6D13',
    borderPrimary: '#E3E4E5',
    textPrimary: '#595959',
    textSecondary: '#6B778C',
    cardIconPrimary: '#4FB477',
    topNavPrimary: '#595959',
    footerPrimary: '#595959',
    thumbUp: '#4FB477',
    thumbDown: '#ED4F4F',
    handUp: '#4fb477',
    handDown: '#ed4f4f',
    modalBg: 'rgba(0, 0, 0, 0.294)'
}

const viewportSize = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '690px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px'
}

const endpoints = {
    APIhost,
    main: "/",
    register: "/register",
    login: "/login",
    eatwell: "/eatwell",
    fitwell: "/fitwell",
    restwell: "/restwell",
    thinkwell: "/thinkwell",
    eatwell_recipe: "/eatwell/recipes/",
    eatwell_calculator: "/eatwell/calculator",
    eatwell_dietplan: "/eatwell/dietplan",
    // TODO - rething endpoint
    eatwell_ingredient_query: `${APIhost}/eatwell/ingredient/q?query=`,
    fitwell_activity: "/fitwell/activities/",
    restwell_idea: "/restwell/ideas/",
    thinkwell_idea: "/thinkwell/exercises/",
    favourites: "/favourites",
    // APIhost: "http://localhost:3001/",
    APIeatWell: "/eatwell/recipes/",
    APIfitWell: "/fitwell/activities/",
    // APIrestWell: "/ideas",
    // APIthinkWell: "/exercises",
    APIrestWell: "/restwell/ideas/",
    APIthinkWell: "/thinkwell/exercises/",
    APIusers: "/users/",
    APIrating:"/vote/",
    APIentries:"/entry/",
    APIuserFavourites: "/favourites",
    addEntry: (moduleUrl) => moduleUrl + "/addEntry",
}

const modules = {
    eatWell: {
        name: 'eatWell',
        icon: <RestaurantIcon />
    },
    fitWell: {
        name: 'fitWell',
        icon: <DirectionsBikeIcon />
    },
    restWell: {
        name: 'restWell',
        icon: <WeekendOutlinedIcon />
    },
    thinkWell: {
        name: 'thinkWell',
        icon: <EmojiObjectsOutlinedIcon />
    },
}

export const dietPlanUrls = {
    meals: {breakfast: "breakfast", lunch: "lunch", dinner: "dinner", supper: "supper"},
    baseUrl: `${endpoints.APIhost}/eatwell/dietplan/`,
    dietPlanForUser: (userId) => dietPlanUrls.baseUrl + userId,
    setRecipeForMeal: (userId, recipeId, mealName) => dietPlanUrls.baseUrl + userId + "/" + mealName + "/" + recipeId
}

const moduleNameToApi = (module) => {
    switch (module.toLowerCase()) {
        case modules.eatWell.name.toLowerCase():
            return endpoints.APIeatWell
            break;
    
        case modules.fitWell.name.toLowerCase():
            return endpoints.APIfitWell
            break;
    
        case modules.thinkWell.name.toLowerCase():
            return endpoints.APIthinkWell
            break;
    
        case modules.restWell.name.toLowerCase():
            return endpoints.APIrestWell
            break;
    
        default:
            break;
    }
}

const moduleNameToBackendTag = (module) => {
    switch (module.toLowerCase()) {
        case modules.eatWell.name.toLowerCase():
            return "recipe";
    
        case modules.fitWell.name.toLowerCase():
            return "activity";
    
        case modules.thinkWell.name.toLowerCase():
            return "exercise";
    
        case modules.restWell.name.toLowerCase():
            return "idea";
    
        default:
            break;
    }
}

const contentTypes = {
    textArea: "text_area",
    ingredientsList: "ingredients_list",
    customList: "custom_list"
}

export { colors, viewportSize, endpoints, modules, contentTypes, moduleNameToApi, moduleNameToBackendTag, isLocalhost }