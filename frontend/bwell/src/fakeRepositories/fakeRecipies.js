const fakeRecipies = [
    {
        id: 1, 
        title: 'recipies 1', 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
    {
        id: 2, 
        title: 'recipies 12', 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, rem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore"},
    {
        id: 3, 
        title: 'recipies 13', 
        description: "Lorem ipsum dolor sit amet, rem ipsum dolor sit amet, consectetur adipiscing elitrem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
]

function fake_getAllRecipesShorts() {
    return fakeRecipies;
}

function fake_getRecipe(id) {
    return fakeRecipies.find(recipe => recipe.id === id);
}

export {
    fake_getAllRecipesShorts,
    fake_getRecipe
}