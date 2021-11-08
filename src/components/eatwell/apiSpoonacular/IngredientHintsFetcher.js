import { endpoints } from "../../../utilities/utilities";

export class IngredientsHintsFetcher {
    
    constructor(phrase=null, hints=null){
        this.phrase = phrase;
        this.hints = hints;
    }

    getURL(query) { 
        return `${endpoints.eatwell_ingredient_query}${query}`;
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

