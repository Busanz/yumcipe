import RecipeCard from '@/components/RecipeCard';
import { getFeaturedRecipes } from '@/utils/functions';

const RecipeLandingPage = async () => {
  const recipes = await getFeaturedRecipes();
  return (
    <div className="flex flex-wrap w-full justify-center px-25 pt-15 pb-10 gap-5">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeLandingPage;
