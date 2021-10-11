// TODO move API KEYS to backend and provide only for logged users 
const API_KEY = '1eac70c6679646c495c10b490246131b';
const API_KEY2 = '11e7a27c2c6c4d3abb6617b3c7521887';

export class IngredientsHintsFetcher {
    
    constructor(phrase=null, hints=null){
        this.phrase = phrase;
        this.hints = hints;
    }
    getURL(query) { 
        return `https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY2}&query=${query}&number=10&metaInformation=true`
    }
    setPhrase(phrase) {
        this.phrase = phrase
    }
    setResponse(hints) { 
        this.hints = hints
    }

    async setHints() {
        const recipeFromServer = await this.fetchData()
        this.setResponse(recipeFromServer)
    }
    async fetchData() {
        const response = await fetch(this.getURL(this.phrase))
        const data = await response.json()
        console.log("fetch")
        console.log(this.phrase)
        return data 
    }
}

