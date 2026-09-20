import Image from 'next/image';
import { getFeaturedRecipes } from '@/utils/api/functions';

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
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            loading="eager"
            fill
            className="object-contain object-left rounded-xl"
            sizes="(max-width: 540px) 50vw, 25vw"
          />
        </div>
      ))}
    </>
  );
};
export default LandingPage;
