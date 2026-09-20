import type { RecipeType } from '@/types/types';

const MAX_ATTEMPTS: number = 15;

const fetchRandomMealByLetter = async (index: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php?v=${index}`,
  );
  const data = await response.json();
  const recipeByLetter: RecipeType = data.meals ? data.meals[0] : null;
  return recipeByLetter && recipeByLetter.strMealThumb ? recipeByLetter : null;
};

export const getFeaturedRecipes = async () => {
  let recipes: RecipeType[] | null = [];
  let attempts: number = 0;

  while (recipes.length < 4 && attempts < MAX_ATTEMPTS) {
    const recipe = await fetchRandomMealByLetter(String(attempts));
    attempts++;
    if (recipe && !recipes.some((item) => item.idMeal === recipe.idMeal)) {
      recipes = [...recipes, recipe];
    }
  }
  return recipes;
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}categories.php`,
    );
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFullRecipe = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`,
  );
  if (!response.ok) {
    throw new Error(`Can not fine recipe id ${id}.`);
  }
  const data = await response.json();
  return data.meals[0];
};

export const fetchRecipesByCategory = async (strCategory: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${strCategory}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to load data from ${strCategory}`);
  }

  const data = await response.json();
  return data.meals ?? [];
};
