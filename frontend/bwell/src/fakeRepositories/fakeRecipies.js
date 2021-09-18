const fakeRecipies = [
    {
        id: 1, 
        title: 'recipies 1', 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",     
        
        content: [
            {
                header: "Ingredients",
                text: [["mąka", "1 łyżka"], ["woda", "1 szklanka"],]
            },
            {
                header: "Description",
                text: "How do you use Lorem Ipsum in VS code A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type and select to insert either a line or paragraph."
            }
        ]
    },
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