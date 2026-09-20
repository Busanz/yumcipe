import RecipeCard from '@/components/RecipeCard';
import { getFeaturedRecipes } from '@/utils/api/functions';

const RecipeLandingPage = async () => {
  const recipes = await getFeaturedRecipes();
  return (
    <section className="flex flex-wrap w-full justify-center px-25 pt-15 pb-10 gap-5">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} {...recipe} />
      ))}
    </section>
  );
};

export default RecipeLandingPage;
