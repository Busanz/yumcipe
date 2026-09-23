import RecipeCard from '@/components/RecipeCard';
import { getFeaturedRecipes } from '@/utils/api/functions';
import Link from 'next/link';

const RecipeLandingPage = async () => {
  const recipes = await getFeaturedRecipes();
  return (
    <section className="flex flex-col w-full justify-center px-25 pt-10 pb-15 ">
      <div className="flex flex-col items-center">
        <h1 className="heading-1">Discover by Recipies</h1>
        <p className="section-dec">
          We have shows four random recipies for you,
        </p>
      </div>
      <div className="flex flex-wrap gap-5 w-full justify-center pb-15">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} {...recipe} />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <p className="section-dec">
          Explore recipes by category and save your favorites to build a
          personalized collection.
        </p>
        <p className="section-dec pt-0">Follow the below link.</p>
        <Link href={'/categories'} className="button-primary">
          Goto category page
        </Link>
      </div>
    </section>
  );
};

export default RecipeLandingPage;
