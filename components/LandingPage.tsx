import Image from 'next/image';
import { getFeaturedRecipes } from '@/utils/api/functions';

const FALLBACK_IMAGE = '/recipe-placeholder.png';

const LandingPage = async () => {
  const recipes = await getFeaturedRecipes();
  return (
    <>
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="relative w-full max-w-80 aspect-square bg-primary rounded-xl"
        >
          <Image
            src={recipe.strMealThumb || FALLBACK_IMAGE}
            alt={recipe.strMeal}
            loading="eager"
            fill
            sizes="(max-width: 540px) 50vw, 25vw"
          />
        </div>
      ))}
    </>
  );
};
export default LandingPage;
