// TODO move API KEYS to backend and provide only for logged users 
const API_KEY = '1eac70c6679646c495c10b490246131b';
// const API_KEY2 = '11e7a27c2c6c4d3abb6617b3c7521887';

export class IngredientsHintsFetcher {
    
    constructor(phrase=null, hints=null){
        this.phrase = phrase;
        this.hints = hints;
    }
    getURL(query) { 
        // return `http://localhost:8080/api/query?query=${query}`;
        return `http://localhost/api/eatwell/ingredient/q?query=${query}`;
        // return `https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${query}&number=10&metaInformation=true`;
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
        const url = this.getURL(this.phrase)
        const response = await fetch(url)
        const data = await response.json() 
        return data 
    }
}

