//Create a function that returns an object to store information about your favorite recipe

function createRecipe(title, servings, ingredients) {
  const recipe = {
    title: title,
    servings: servings,
    ingredients: ingredients,
  };

  console.log(
    "Title: " +
      recipe.title +
      ", Servings: " +
      recipe.servings +
      ", Ingredients: " +
      recipe.ingredients.join(", ")
  );

  return recipe;
}
