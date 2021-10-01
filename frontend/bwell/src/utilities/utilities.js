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
    restwell: "/restwell/",
    thinkwell: "/thinkwell/",
    eatwell_recipe: "/eatwell/recipe/",
    eatwell_calculator: "/eatwell/calculator",
    eatwell_dietplan: "/eatwell/dietplan",
    fitwell_activity: "/fitwell/activity/",
    // restwell_idea: "/restwell/",
    // thinkwell_idea: "/thinkwell/",
    favourites: "/favourites",
    APIhost: "http://localhost:3001/",
    APIrestWell: "restWell",
    APIthinkWell: "thinkWell",
    addEntry: "/addentry"
    
}

export { colors, viewportSize, endpoints }