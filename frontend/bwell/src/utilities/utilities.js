import RestaurantIcon from '@material-ui/icons/Restaurant';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import TextAreaInput from '../components/entrycreator/inputareas/TextAreaInput';
import IngredientsList from '../components/entrycreator/inputareas/IngredientsList';


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
    main: "/",
    register: "/register",
    login: "/login",
    eatwell: "/eatwell",
    fitwell: "/fitwell",
    restwell: "/restwell",
    thinkwell: "/thinkwell",
    eatwell_recipe: "/eatwell/recipe/",
    eatwell_calculator: "/eatwell/calculator",
    eatwell_dietplan: "/eatwell/dietplan",
    fitwell_activity: "/fitwell/activity/",
    restwell_idea: "/restwell/idea/",
    thinkwell_idea: "/thinkwell/exercise/",
    favourites: "/favourites",
    APIhost: "http://localhost:3001/",
    APIeatWell: "recipes",
    APIfitWell: "activities",
    APIrestWell: "ideas",
    APIthinkWell: "exercises",
    APIusers: "users/",
    APIuserFavourites: "favourites",
    addEntry: (moduleUrl) => moduleUrl + "/addEntry"
    
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

const contentTypes = {
    textArea: "text_area",
    ingredientsList: "ingredients_list",
    customList: "custom_list"
}

export { colors, viewportSize, endpoints, modules, contentTypes }